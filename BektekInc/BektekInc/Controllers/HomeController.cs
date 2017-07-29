using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using BektekInc.Models;
namespace BektekInc.Controllers
{
    [Authorization]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public string registerUser()
        {
            LoginModels user;
            userStorage userstorage = new userStorage(new database());
            userManager usermananager = new userManager(userstorage);
            user = new LoginModels() { //using Object Initializer
                Email = "fuck yoou",
                UserName = "atme"
            };
            var result = usermananager.CreateAsync(user); //add user to manager
            return result.IsCompleted ? "User Added" : result.IsFaulted.ToString();

        }
    }


    public class AuthorizationAttribute : FilterAttribute, IAuthorizationFilter
    {
         void IAuthorizationFilter.OnAuthorization(AuthorizationContext filterContext)
        {
            filterContext.HttpContext.User.ToString();
            filterContext.HttpContext.ToString();
            filterContext.Controller.ViewBag.OnAuthorization = "IAuthorizationFilter.OnAuthorization filter called";
            //ApplicationSignInManager.Create()
            filterContext.Result = new RedirectToRouteResult(
                 new RouteValueDictionary(
                     new { action = "login", Controller = "Account" }));
        }

        public string User { get; set; }
        public string Access { get; set; }
    }

}