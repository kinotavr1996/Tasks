using System.Collections.Generic;
using System.Linq;    

namespace WriterApp.Model
{
    public class PagedList<T> : List<T>
    {
        public int TotalCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public PagedList(IQueryable<T> set, int page, int size)
        {
            TotalCount = set.Count();
            PageSize = size;
            Page = page;
            if (page == 0)
                AddRange(set.Take(size).ToList());
            else
                AddRange(set.Skip(page * size).Take(size).ToList());
        }
    }
}
