//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BektekInc.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class orderAudit_Valentine
    {
        public int audit { get; set; }
        public int orderID { get; set; }
        public string Part_num { get; set; }
        public int oldQty { get; set; }
        public int newQty { get; set; }
    }
}
