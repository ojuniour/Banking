using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bank.Models;

namespace Bank.Controllers
{
    //[Authorize]
    [RoutePrefix("api/Customer")]
    [Route("{action}")]
    public class CustomerController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "get has been successfull";
        }
        
        //POST
        //login
        public string login([FromBody]customerLogin login)
        {
            Console.Write(login.username);
            Console.Write(login.password);
            return "success";
        }

        // POST api/values
        public void Post([FromBody]customerLogin value)
        {
            if (value.username == "h")
                value.username = "t";


        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
