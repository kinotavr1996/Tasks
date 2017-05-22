using System.Collections.Generic;

namespace WriterApp.Web.ViewModel
{
    public class BookListViewModel
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
        public List<BookGridModel> Items { get; set; }
        public string Filter { get; set; }
        public GridOrder Order { get; set; }
        public BookListViewModel()
        {
            Order = new GridOrder();
            Items = new List<BookGridModel>();
            PageSize = 4;
            Page = 1;
        }
        public bool HasPreviousPage
        {
            get
            {
                return (Page > 1);
            }
        }
        public bool HasNextPage
        {
            get
            {
                return (Page < TotalPages);
            }
        }

    }
}
