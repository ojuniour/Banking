using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace BektekInc.Models
{
    public class LoginModels : IdentityUser
    {
       public string email { get; set; }
    }

    //database
    public class database : IdentityDbContext<LoginModels>
    {
        public database() : base("connectionString")
        {

        }

    }

    //Defines method for CRUD
    public class userStorage : UserStore<LoginModels>
    {
        public userStorage(database db): base(db)
        {

        }

    }

    //Manage Users (CRUD) ues userstorage to connect to the database
    public class userManager : UserManager<LoginModels>
    {
        public userManager(IUserStore<LoginModels> db) : base(db)
        {

        }
    }


}