using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using Bank.Models;
using Layers.BLL;



namespace Layers.DAL
{
    class DAL
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings.ToString());
        DataTable dt = new DataTable();
        SqlDataAdapter data = new SqlDataAdapter();
        
        
        

        public void custLogin( customerLogin login)
        {
            SqlCommand cmd = new SqlCommand("Select * from ");
            cmd.ExecuteNonQuery();

        }

        public string login()
        {


            return "nothing";
        }
        
    }
}
