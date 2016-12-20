using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace WebApplication1.Models
{
    public class DecimalModelBinder : DefaultModelBinder
    {
        public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            //var value = base.BindModel(controllerContext, bindingContext);
            var value = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);
            if (value != null)
                return Convert.ToDecimal(value.AttemptedValue);
            return value;
        }
    }
}