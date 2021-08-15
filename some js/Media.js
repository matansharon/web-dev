class Media{
  constructor(title){
    this._title=title
    this._isCheckedOut =false
    this._ratings=[]
  }
  get title(){
    return this._title
  }
  get isCheckedOut()
  {
    return this._isCheckedOut
  }
  get ratings(){
    return this._ratings
  }
  set isCheckOut(val){
    this._isCheckedOut=val

  }
  toggleCheckOutStatus (){
    this._isCheckedOut= !this._isCheckedOut
    }
    getAverageRating (){
      let _sum=0
      if (this._ratings.length>0){
      for(let i =0;i<this._ratings.length;i++){
        _sum+=this._ratings[i]
      }
      return _sum/this._ratings.length
      }
      else{
        return 0
      }

    }
    addRating(rating){
      this._ratings.push(rating)
    }
  }


class Book extends Media{
  constructor(title,author,pages){
    super(title)
    this._author=author
    this._pages=pages

  }
  get author(){
    return this._author

  }
  get pages(){
    return this._pages
  }

}

class Movie extends Media{
  constructor(title,director,runTime){
    super(title)
    this._director=director
    this._runTime=runTime
  }
  get director(){
    return this._director
  }
  get runTime(){
    return this._runTime
  }
  
}



// if __name__=='__main__:'
const m=new Media('matan')
// m.ratings.push(12,14,14)
// console.log(m)
// m.toggleCheckOutStatus()
// console.log(m)
// m.toggleCheckOutStatus()
// console.log(m)

// console.log(m.getAverageRating())
const b=new Book('matah','sharon',347)
// console.log(b.isCheckedOut)
