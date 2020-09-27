import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { map } from 'rxjs/operators';
import  { PostType, Post, PostStatus, Category, PostResponse, User, SearchParameters} from '../models/index';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor(private db: AngularFirestore) { }

    getPostTypes(){
        return this.db.collection<PostType>('postType').snapshotChanges()
            .pipe(
                map(postTypeDocs => {
                    return postTypeDocs.map(postTypeDoc => {
                      const postType = postTypeDoc.payload.doc.data();
                      postType.id = postTypeDoc.payload.doc.id;
                      return postType;
                    });
                  })
            );
    }

    getPostStatus(){
      return this.db.collection<PostStatus>('postStatus').snapshotChanges()
            .pipe(
                map(postStatusDocs => {
                    return postStatusDocs.map(postStatusDoc => {
                      const postStatus = postStatusDoc.payload.doc.data();
                      postStatus.id = postStatusDoc.payload.doc.id;
                      return postStatus;
                    });
                  })
            );
    }

    getPostCategory(){
      return this.db.collection<Category>('categories').snapshotChanges()
            .pipe(
                map(categoryDocs => {
                    return categoryDocs.map(categoryDoc => {
                      const category = categoryDoc.payload.doc.data();
                      category.id = categoryDoc.payload.doc.id;
                      return category;
                    });
                  })
            );
    }

    getUser(password: string,userName: string){
      return this.db.collection<User>('users')
      .doc<User>(userName).snapshotChanges()
        .pipe(
          map(userDoc => {
              const user = userDoc.payload.data();
              if(user != null && user.password === password){
                user.userName = userDoc.payload.id;
                return user;
              }
              return null;
            })
        );
    }

    getPosts(){
      return this.db.collection<Post>('posts')
        .snapshotChanges()
        .pipe(
          map(postDocs => {
            return postDocs.map(postDoc => {
              const post = postDoc.payload.doc.data();
              post.id = postDoc.payload.doc.id;
               return post;
            });
          })
        );
    }

    createPostResponse(postResponse: PostResponse){
      debugger;
      this.db.collection('postResponse').add({...postResponse});
    }

    createPost(post: Post){
        this.db.collection('posts').add({...post});
    }


}