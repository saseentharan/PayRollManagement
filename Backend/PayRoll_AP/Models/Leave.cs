namespace PayRoll_AP.Models
{
    public class Leave
    {   
        public int L_id { get; set; } 
        public DateTime From_date { get; set; }
        public DateTime To_date { get; set; }   
        public string Reason { get; set; }
        public int Detuction { get; set; }

        public int Leaves { get; set; }

        public int Status { get; set; }

        public int E_id { get; set; }   
        public string Empname { get; set; }
            

    }
}
