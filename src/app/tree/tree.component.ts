import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createGitgraph } from '@gitgraph/js';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  gitgraph: any;
  branchHolder: any[] = [];
  master: any;

  constructor() {}

  ngOnInit() {
    this.openGitTree();
  }


  openGitTree(): void {
    const graphContainer = document.getElementById('graph-container');

    this.gitgraph = createGitgraph(graphContainer);

    this.master = this.gitgraph.branch('master');
    this.master.commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: 'Initial commit'});


    const develop = this.gitgraph.branch('develop');
    develop.commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: 'Add TypeScript'});

    const aFeature = this.gitgraph.branch('a-feature');
    aFeature
      .commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: 'Make it work'})
      .commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: 'Make it right'})
      .commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: 'Make it fast'});

    develop.merge({branch: aFeature, commitOptions: {author: 'Veryan Goodship <v.goodship@gmail.com>'}});
    develop.commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: 'Prepare v1'});

    this.master.merge({branch: develop, commitOptions: {author: 'Veryan Goodship <v.goodship@gmail.com>'}}).tag('v1.0.0');
  }

  commit(commitName: string) {
    if (this.branchHolder.length > 0) {
      this.branchHolder[this.branchHolder.length - 1].commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: commitName});
    } else {
      this.master.commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: commitName});
    }
  }

  branch(branchName: string) {
    const newBranch = this.gitgraph.branch(branchName);
    newBranch.commit({author: 'Veryan Goodship <v.goodship@gmail.com>', subject: branchName + ' first commit'});
    this.branchHolder.push(newBranch);
  }

  merge() {
    if (this.branchHolder.length === 1) {
      this.master.merge({branch: this.branchHolder[0], commitOptions: {author: 'Veryan Goodship <v.goodship@gmail.com>'}});
    } else if (this.branchHolder.length > 1) {
      const lastItem = this.branchHolder.pop();
      this.branchHolder[this.branchHolder.length - 1]
        .merge({branch: lastItem, commitOptions: {author: 'Veryan Goodship <v.goodship@gmail.com>'}});
    }
  }

}
