using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.ViewModel
{
    public class PagedListViewModel<T> : List<T>
    {
        public int Page { get;  set; }
        public int PageSize { get;  set; }
        public int TotalPages { get;  set; }  

        public List<T> Items { get; set; }

        public string Filter { get; set; }

        public GridOrder Order { get; set; }

        public PagedListViewModel()
        {
            Order = new GridOrder();
            Items = new List<T>();
            PageSize = 4;
            Page = 1;
        }

        public PagedListViewModel(List<T> items, int count, int pageIndex, int pageSize)
        {
            Page = pageIndex;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            items.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
            this.AddRange(items);
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
        public  async Task<PagedListViewModel<T>> CreateAsync(List<T> source, int pageIndex, int pageSize)
        {
            var count = source.Count();
            var items = source.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
            return new PagedListViewModel<T>(items, count, pageIndex, pageSize);
        }
    }
}
