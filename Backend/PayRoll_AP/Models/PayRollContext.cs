using Microsoft.Data.SqlClient;
using System.Data;
using System.Diagnostics.Contracts;

namespace PayRoll_AP.Models
{
    public class PayRollContext
    {
        public readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public PayRollContext(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("paycon");
        }

            public IDbConnection CreateConnection()=> new SqlConnection(_connectionString);
    }
}
