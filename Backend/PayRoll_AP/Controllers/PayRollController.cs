using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PayRoll_AP.Interface;
using PayRoll_AP.Models;

namespace PayRoll_AP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PayRollController : ControllerBase
    {
        private readonly PayRollInterface _Iobj;

        public PayRollController(PayRollInterface iobj)
        {
            _Iobj = iobj;
        }

        [HttpGet]
        public IActionResult GetPayRoll()
        {
            try
            {
                var companies = _Iobj.GetPayRoll();
                return Ok(companies);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }


        [HttpGet("{id}")]

        public IActionResult PayGetId(int id)
        {
            var res = _Iobj.GetById(id);
            return Ok(res);
        }


        [HttpPut("{id}")]
        public void PayUpdate(int id, PayRoll p)
        {

            _Iobj.update(id, p);



        }
        /*
                [HttpPost]

                public void PayInsert(PayRoll p) {
                    _Iobj.insert(p);


                }*/

        [HttpPost]
        /*        [Route("insert")]*/
        public async Task<IActionResult> Insert(PayRoll p)
        {
            try
            {
                var companies = await _Iobj.insert(p);
                return Ok(companies);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]

        public void PayDelete(int id)
        {
            _Iobj.delete(id);
        }


        /*

        #####################################################################################################################*/

        [HttpGet]
        [Route("leave")]

        public IActionResult GetLeavesss()
        {
            try
            {
                var companies = _Iobj.GetLeave();
                return Ok(companies);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        [HttpPost]
        [Route("leave")]
        /*        [Route("insert")]*/
        public async Task<IActionResult> Insert_Leave(Leave l)
        {
            try
            {
                var companies = await _Iobj.leave_insert(l);
                return Ok(companies);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        [HttpPut]
        [Route("leave")]

        public void update_Leave([FromQuery] int id, [FromQuery] int status)
        {

            /*var companies = await _Iobj.leave_insert(l);*/
            /* Console.WriteLine(id + " => " + status);*/
            Console.WriteLine(id + " " + status);
            _Iobj.update_status(id, status);




        }

        [HttpGet]
        [Route("login")]
        public int adminlogin([FromQuery] string username, [FromQuery] string password)
        {
            var companies = _Iobj.userlogin(username, password);
            return companies;

        }
    }
}
