import {Pipe, PipeTransform} from '@angular/core';
import {Post, SearchParameters} from '../../models';

@Pipe({
  name: 'requestFilter'
})
export class RequestFilterPipe implements PipeTransform {

  transform(items: Post[], postFilter: SearchParameters): Post[] {
    if (!(items)) {
      return items;
    }
    if (postFilter) {
      items = items.filter(item => (!postFilter.categoryId || postFilter.categoryId === item.categoryId) &&
        (!postFilter.postTypeId || postFilter.postTypeId === item.postTypeId) &&
        (!postFilter.keyword || item.title.toLowerCase().includes(postFilter.keyword.toLowerCase()) ||
          item.description.toLowerCase().includes(postFilter.keyword.toLowerCase())));
    }
    return items;
  }

}
