import { Component } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-post-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './post-lista.component.html',
  styleUrl: './post-lista.component.scss'
})
export class PostListaComponent {
  posts: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
      this.postService.getAllPosts()
        .subscribe((data) => {
          this.posts = data;
        });
  }


  onNavigateToNewPost(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  onNavigateToPostDetail(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}
