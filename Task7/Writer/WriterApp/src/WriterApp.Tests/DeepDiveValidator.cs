using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace WriterApp.Tests
{
    /// <summary>
    /// Validates entities using the Data Annotations validator. Adds deep validation of complex
    /// types as the built in validator only does the first level.
    /// </summary>
    public class DeepDiveValidator
    {
        public List<ValidationResult> Validate(object instance)
        {
            var result = new List<ValidationResult>();
            ValidateImpl(instance, new HashSet<object>(), result);
            return result;
        }

        void ValidateImpl(object instance, HashSet<object> complete, List<ValidationResult> errors)
        {
            if (instance == null)
                throw new ArgumentNullException("instance");

            // Check that we haven't already validated this instance through a loop, self reference
            // or multiple properties pointing to the same thing.
            if (complete.Contains(instance))
                return;

            complete.Add(instance);

            // Run the basic Data Annotations validator against the instance. This checks the first
            // level of properties for us.
            var type = instance.GetType();
            var context = new ValidationContext(instance, null, null);

            var isValid = Validator.TryValidateObject(instance, context, errors, true);

            // Now go through the properties and find any that are complex enough that they might
            // have their own validation requirements. Recurse into each value that we find.
            foreach (var property in type.GetProperties())
            {
                // Simple properties have already been done
                if (!IsComplexType(property.PropertyType))
                    continue;

                // Ignore indexed properties as there is no way to know how to enumerate them on
                // their own. Classes should implement IEnumberable if they want these accessed
                // anyway.
                if (property.GetIndexParameters().Length > 0)
                    continue;

                // Get the value assigned to the property and recurse into it
                var value = property.GetValue(instance, null);

                if (value == null)
                    continue;

                ValidateImpl(value, complete, errors);

                // If the value is also an enumerable type, recursively validate its children too
                var enumerable = value as IEnumerable;

                if (enumerable != null)
                {
                    foreach (var child in enumerable)
                    {
                        if (child == null)
                            continue;

                        if (!IsComplexType(value.GetType()))
                            continue;

                        ValidateImpl(child, complete, errors);
                    }
                }
            }
        }

        static bool IsComplexType(Type type)
        {
            if (type == typeof(string))
                return false;

            // Complex object test borrowed from System.Web.Mvc.ModelMetaData.IsComplexType
            if (TypeDescriptor.GetConverter(type).CanConvertFrom(typeof(string)))
                return false;

            return true;
        }
    }
}