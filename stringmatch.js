var closeStrings = function(word1, word2) {
    if(word1.length!=word2.length)
    {
        return false;
    }
    const s1=[];
    const s2=[];
    //let s1=new Array(26).fill(0);
    //let s2=new Array(26).fill(0);
    //let set1=new Array(26).fill(false);
    //let set2=new Array(26).fill(false);
    for(let i=0;i<word1.length;i++)
    {
        s1[word1.charCodeAt(i)-'a'.charCodeAt(0)]++;
        s2[word1.charCodeAt(i)-'a'.charCodeAt(0)]++;
    }
    s1.sort((a,b)=>a-b);s2.sort((a,b)=>a-b);
    for(let i=0;i<26;i++)
    {
        if(s1[i]!==s2[i]){ 
          console.log("false")
          break;
        }
    }
    console.log(true);
    console.log(s1,s2);
    console.log("Thats it!!");
};
closeStrings("abc","bca");
