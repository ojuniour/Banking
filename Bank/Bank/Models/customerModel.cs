using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Bank.Models
{
    
   
    public class customerLogin 
    {
        DbContext db;
        public string username { get;  set; }
        public string password { get; set; }
    }

    public class customerInfo
    {

        public string email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
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