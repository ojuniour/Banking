//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bank
{
    using System;
    using System.Collections.Generic;
    
    public partial class orderHeader_Valentine
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public orderHeader_Valentine()
        {
            this.orderDetails_Valentine = new HashSet<orderDetails_Valentine>();
        }
    
        public int orderId { get; set; }
        public string customerName { get; set; }
        public System.DateTime orderDate { get; set; }
        public string orderShipTo { get; set; }
        public string specialInstructions { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<orderDetails_Valentine> orderDetails_Valentine { get; set; }
    }
}