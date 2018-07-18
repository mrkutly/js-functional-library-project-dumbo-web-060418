fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

// OBJECTS OR ARRAYS

    each: function(collection, cb) {
      // create copy of collection (NO MUTABLE DATA)
        let newCollection = Object.assign({}, collection)

        for(let i in newCollection){
          // cb is called with el, index, collection
          cb(newCollection[i], i, newCollection)
        }
      // return original collection
      return collection
    },

    map: function(collection, cb) {
      // create copy of collection (NO MUTABLE DATA)
        let newCollection = Object.assign([], collection)
        let returnArray = []

        for(let i in newCollection){
          // cb(newCollection[i], i, newCollection)
          returnArray.push(cb(newCollection[i], i))

        }
        return returnArray
    },

    reduce: function(collection, cb, acc) {
      let newCollection = Object.assign({}, collection)

      for(let i in newCollection) {
        acc = cb(acc, newCollection[i], newCollection)
      }
      return acc;
    },

    find: function(collection, predicate){
      for(let el of collection){
        if(predicate(el)){
          return el
        }
      }
    },

    filter: function(collection, predicate){
      const filtered = []

      for(let el of collection){
        if(predicate(el)){
          filtered.push(el)
        }
      }
      return filtered
    },

    size: function(collection){
      let counter = 0

      for(let i in collection){
        counter++
      }
      return counter
    },

// ARRAYS ONLY

    first: function(array, n=1){
      return n === 1 ? array[0] : array.slice(0, n)
    },

    last: function(array, n=1){
      return n === 1 ? array[array.length - 1] : array.slice(-n)
    },

    compact: function(array) {
      let compacted = []

      for (let el of array) {
        if (!!el) {
          compacted.push(el);
        }
      }
      return compacted
    },

    sortBy: function(array, cb){
      let sorted = array.slice();
      return sorted.sort(function(a, b){ return cb(a) - cb(b) });
    },

    flatten: function(array, shallow = false){
      const flat = []

      for (let el of array){
        if (Array.isArray(el) && shallow === false){
          flat.push(...fi.flatten(el))
        } else if (Array.isArray(el)){
          flat.push(...el)
        } else {
          flat.push(el)
        }
      }
      return flat
    },

    sortedUniq: function(array, cb){
      // Objects cannot be keys
      const unique = []
      const seenCBs = new Map

      for(let el of array){
        if (unique[unique.length - 1] !== el && !seenCBs.has(cb(el))){
          unique.push(el);
          seenCBs.set(el, true);
        }
      }
      return unique
    },

    unsortedUniq: function(array, cb){
      // I think objects CANNOT BE KEYS
      const unique = []
      const seenCBs = new Map
      const seen = new Map

      for(let i in array){
        if (!seen.has(array[i]) && !seenCBs.has(cb(array[i]))){
          unique.push(array[i]);
          seen.set(array[i], true);
          seenCBs.set(cb(array[i]), true);
        }
      }
      return unique
    },

    uniq: function(array, isSorted = false, cb = (el => el)){
      return !!isSorted ? fi.sortedUniq(array, cb) : fi.unsortedUniq(array, cb)
    },

    keys: function(object){
      const keys = []

      for(const key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object){
      const values = []

      for(const key in object){
        values.push(object[key])
      }
      return values
    },


    functions: function(object) {
      const functions = []

      for(const key in object){
        if(typeof(object[key]) === "function"){
          functions.push(key)
        }
      }
      return functions.sort()
    },

    giveMeMore: function(){

    }

  }
})()

fi.libraryMethod()











//
