var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
         for (let j = i + 1; j < nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]; 
            }
        }
    }
};

// RunTime : 87ms
//Beats 36.29%of users with JavaScript

// MEmory : 42.60MB
// Beats 51.53%of users with JavaScript
 
