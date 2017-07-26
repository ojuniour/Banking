using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BektekInc.Startup))]
namespace BektekInc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
