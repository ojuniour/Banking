using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.Models
{
    public class customerModel
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    public class customerResetPasswordModel
    {
        public string email { get; set; }
        public string oldpassword { get; set; }
        public string newpassword { get; set; }
    }

    public class customerInfoModel
    {
        public string username { get; set; }
        public string password { get; set; }
    }
}