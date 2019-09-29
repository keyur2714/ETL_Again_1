import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList : string[] = ["keyur","denish","vinit"];

  friendName : string = 'hiren';

  errorMessage : string = '';

  isUpdate : boolean = false;
  updateIdx : number = -1;

  constructor() { }

  ngOnInit() {
  }

  // add(name : string) : void {
  //   //alert("Say Hello...!"+name);
  //   this.friendsList.push(name);
  // }
  add() : void {    
    let findIdx = this.friendsList.indexOf(this.friendName);
    //alert(findIdx);    
    if(findIdx === -1){
      this.friendsList.push(this.friendName);
      this.errorMessage = '';
    }else{
      this.errorMessage = this.friendName +' Already Exists.';
    }    
    this.friendName = '';
  }
  edit(idx : number) : void {
    //alert(idx);
    this.isUpdate = true;
    this.updateIdx = idx;
    this.friendName = this.friendsList[idx];
  }
  update() : void {
    let findIdx = this.friendsList.indexOf(this.friendName);
    //alert(findIdx);    
    if(findIdx === -1){
      this.friendsList[this.updateIdx] = this.friendName;
      this.errorMessage = '';
      this.updateIdx = -1;
      this.isUpdate = false;
    }else{
      this.errorMessage = this.friendName +' Already Exists.';
    }    
    this.friendName = '';
  }

  delete(idx : number) : void {
    let deleteName = this.friendsList[idx];
    let confirmMsg = confirm('Are you sure want to delete '+deleteName);
    if(confirmMsg){
      this.friendsList.splice(idx,1);
      this.errorMessage = deleteName +" Deleted Successfully.";
    }
  }
}
