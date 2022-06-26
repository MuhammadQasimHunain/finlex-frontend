import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    templateUrl: './tree.component.html'
})
export class TreeComponent implements OnInit {


    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    selectedFiles1: TreeNode;

    selectedFiles2: TreeNode[];

    selectedFiles3: TreeNode;

    cols: any[];

    constructor() {}

    ngOnInit() {
        
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
