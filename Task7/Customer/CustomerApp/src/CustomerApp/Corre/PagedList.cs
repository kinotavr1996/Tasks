using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Corre
{
    public class PagedList<T> : List<T>
    {
        public int TotalCount { get; set; }
        public int Page { get; set; }

        public PagedList(IQueryable<T> set, int page, int size)
        {
            TotalCount = set.Count();

            if (page == 0)
                AddRange(set.Take(size).ToList());
            else
                AddRange(set.Skip(page * size).Take(size).ToList());
        }
    }
}
