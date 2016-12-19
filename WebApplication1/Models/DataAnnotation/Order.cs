using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    [MetadataType(typeof(DataAnnotation))]
    public partial class Order
    {
        class DataAnnotation
        {
            [Key]
            public int Id { get; set; }
            public string Name { get; set; }
            [DisplayFormat(ApplyFormatInEditMode = false, DataFormatString = "{0:N0}")]
            public int Price { get; set; }
            [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:N2}")]
            public decimal Quantity { get; set; }
        }
    }
}