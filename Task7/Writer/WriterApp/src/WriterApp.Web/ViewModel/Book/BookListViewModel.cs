using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace WriterApp.Web.ViewModel
{
    public class BookListViewModel : PagedListViewModel<BookGridModel>
    {
        public BookListViewModel()
        {
            Writers = new List<SelectListItem>();
        }
        public List<SelectListItem> Writers { get; set; }
    }
}
