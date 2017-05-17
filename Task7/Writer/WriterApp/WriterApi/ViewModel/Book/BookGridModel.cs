using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;

namespace WriterApi.ViewModel
{
    public class BookGridModel
    {
        public BookGridModel()
        {
            Writers = new List<WriterGridModel>();
        }
        public int Id { get; set; }
        public string Caption { get; set; }
        public DateTime PublishedDate { get; set; }
        public List<int> WriterIds { get; set; }
        public List<WriterGridModel> Writers { get; set; }
    }
}
