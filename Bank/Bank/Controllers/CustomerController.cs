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
            return "value";
        }

        // GET api/values/5
        public string login(int id)
        {
            return "value2";
        }

        // POST api/values
        public void Post([FromBody]customerModel value)
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
