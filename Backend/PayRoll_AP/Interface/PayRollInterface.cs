using PayRoll_AP.Controllers;
using PayRoll_AP.Models;

namespace PayRoll_AP.Interface
{
    public interface PayRollInterface
    {
        public IEnumerable<PayRoll> GetPayRoll();
        
        public Task update(int id,PayRoll p);

        public Task<int> insert(PayRoll p);

        public void delete (int id); 

        public PayRoll GetById(int id);
        /*

        #############################################################################*/

        public IEnumerable<Leave> GetLeave();
        public Task<int> leave_insert(Leave l);

        public Task update_status(int id,int status);

        public int userlogin(string username,string password);

    }
}
