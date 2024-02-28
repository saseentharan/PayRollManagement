using Dapper;
using Microsoft.Data.SqlClient;
using PayRoll_AP.Interface;
using PayRoll_AP.Models;
using System.Data;
using System.Reflection.Metadata;

namespace PayRoll_AP.Repo
{
    public class PayRollRepo : PayRollInterface
    {
        private readonly PayRollContext _context;

        public PayRollRepo(PayRollContext context)
        {
            _context = context;
        }

        //Read

        public IEnumerable<PayRoll> GetPayRoll()
        {
            var query = "select * from payroll";

            using (var connection = _context.CreateConnection())
            {
                var res = connection.Query<PayRoll>(query);
                return res ;
            }
        }

        //Read by id
        public PayRoll GetById(int id)
        {
            var query = "select * from payroll where id = @id";
            using (var connection = _context.CreateConnection())
            {
                var res = connection.QueryFirstOrDefault<PayRoll>(query, new { id });
                return res;
            }
        }



        //Update

        public async Task update(int id,PayRoll p) {

            var procedure = "update_data";
            var parameter = new DynamicParameters();
            parameter.Add("@id", id, DbType.Int32,ParameterDirection.Input);
            parameter.Add("@name", p.EmpName, DbType.String, ParameterDirection.Input);
            parameter.Add("@dop", p.DOB, DbType.Date, ParameterDirection.Input);
            parameter.Add("@accno", p.AccNo, DbType.Int32, ParameterDirection.Input);
            parameter.Add("@leave", p.Leave, DbType.Int32, ParameterDirection.Input);
            parameter.Add("@username", p.username, DbType.String, ParameterDirection.Input);
            parameter.Add("@password", p.pass, DbType.String, ParameterDirection.Input);





            using (var connection = _context.CreateConnection()) {

                var res = await connection.ExecuteAsync(procedure, parameter, commandType: CommandType.StoredProcedure);
           
            }
        }

        public async Task<int> insert(PayRoll p)
        {

            var procedure = "insert_data";
            var parameter = new DynamicParameters();

            parameter.Add("@name", p.EmpName, DbType.String, ParameterDirection.Input);
            parameter.Add("@dop", p.DOB, DbType.Date, ParameterDirection.Input);
            parameter.Add("@accno", p.AccNo, DbType.Int32, ParameterDirection.Input);
            parameter.Add("@leave", p.Leave, DbType.Int32, ParameterDirection.Input);
            parameter.Add("@username", p.username, DbType.String, ParameterDirection.Input);
            parameter.Add("@password", p.pass, DbType.String, ParameterDirection.Input);



            using (var connection = _context.CreateConnection())
            {

                var res = await connection.ExecuteAsync(procedure, parameter, commandType: CommandType.StoredProcedure);
                return res;
            }
            
        }

        public void delete(int id)
        {
            var query = "delete from payroll where id = @id";
            using (var connection = _context.CreateConnection())
            {
                 connection.Execute(query, new { id });
            }
        }

        /*#####################################################################################################################################
        */

        /*  Leave*/


        public IEnumerable<Leave> GetLeave()
        {
            var query = "select * from leave";

            using (var connection = _context.CreateConnection())
            {
                var res = connection.Query<Leave>(query);
                return res;
            }
        }
        public async Task<int> leave_insert(Leave l)
        {

            var procedure = "insert_leave";
            var parameter = new DynamicParameters();
            // parameter.Add("@Id", p.Id, DbType.String, ParameterDirection.Input);
            parameter.Add("@f_d", l.From_date, DbType.Date, ParameterDirection.Input);
            parameter.Add("@t_d", l.To_date, DbType.Date, ParameterDirection.Input);
            parameter.Add("@reason", l.Reason, DbType.String, ParameterDirection.Input);
            parameter.Add("@e_id", l.E_id, DbType.Int32, ParameterDirection.Input);
            Console.WriteLine(l.From_date+"=>"+l.To_date);
         
            using (var connection = _context.CreateConnection())
            {

                var res = await connection.ExecuteAsync(procedure, parameter, commandType: CommandType.StoredProcedure);
                return res;
            }

        }

        public async  Task update_status(int id, int status)
        {
           
            var procedure = "update_status";
            var parameter = new DynamicParameters();
            parameter.Add("@id",id, DbType.Int32, ParameterDirection.Input);
            parameter.Add("@status",status , DbType.Int32, ParameterDirection.Input);

            using (var connection = _context.CreateConnection())
            {
              var res =  await connection.ExecuteAsync(procedure, parameter, commandType: CommandType.StoredProcedure);
            }
        }

        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        public int  userlogin(string username, string password)
        {
            string connectionString = "Data Source=10.1.193.167\\SQLEXPRESS;Initial Catalog=dbfapproach;Persist Security Info=False;User ID=sa;Password=sql@123;Pooling=False;Multiple Active Result Sets=False;Encrypt=False;Trust Server Certificate=False;Command Timeout=0";
            using (var con = new SqlConnection(connectionString))
            {


                using (var cmd = new SqlCommand("select dbo.adminlogincheck(@username,@pwd)", con))
                {
                    cmd.Parameters.AddWithValue("@username", username);
                    cmd.Parameters.AddWithValue("@pwd", password);


                    con.Open();

                    int c = Convert.ToInt32(cmd.ExecuteScalar());


                    if (c == 1)
                    {

           

                        con.Close();
                        return 1;

                    }
                    else
                    {


                        return 0;

                    }

                }

            }

        }
        /*
       public Leave update_status(int id, int status)
       {

           *//*            var query = "update leave set status = @Status  where l_id = @Id";
            *            
           *//*
           var procedure = "update_status";
           var parameter = new DynamicParameters();
           parameter.Add("@id", id, DbType.String, ParameterDirection.Input);
           parameter.Add("@status", status, DbType.Int32, ParameterDirection.Input);

           using (var connection = _context.CreateConnection())
           {
               *//*                var res = connection.QueryFirstOrDefault<Leave>(query, new { Id = id, Status = status });
               *//*
               var res = connection.ExecuteAsync(procedure, parameter, commandType: CommandType.StoredProcedure);

               return (res;
           }
       }*/

    }
}

