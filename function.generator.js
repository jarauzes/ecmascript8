var myGen = function* () {
    var one = yield 1;
    var two = yield 2;
    var three = yield 3;
    console.log(one, two, three);
}

var gen = myGen();

console.log(gen.next());
console.log(gen.next(4));
console.log(gen.next(6));
console.log(gen.next('a'));
console.log(gen.next());

function smartCode(generator) {
    //get generator ready to run
    var gen = generator();

    //get my first yielded value
    var yieldedVal = gen.next();

    //if it's a promise, wait for it to fulfill and pass the value back to generator
    if(yieldedVal.then) {
        //its a promise!!!
        yieldedVal.then(gen.next)
    }
}


//Bluebird
Promise.coroutine(function* () {
    var tweets = yield $.get('tweets.json');
    console.log(tweets);
})();
//Bluebird runs the generator, notices yield is a promise
//so it waits on that promise, then passes it's value back to the generator when complete

//here, it runs them in sequence, waiting for each to complete before proceeding
Promise.coroutine(function* () {
    var tweets = yield $.get('tweets.json');
    var profile = yield $.get('profile.json');
    var friends = yield $.get('friends.json');
    console.log(tweets, profile, friends);
})();

//Bluebird needs a little pre-config to yield arrays,
//add this setup codesomewhere in your app
Promise.coroutine.addYieldHandler(function(yieldedValue) {
    if (Array.isArray(yieldedValue)) return Promise.all(yieldedValue);
});


Promise.coroutine(function* () {
    var [tweets, profile] = yield [$.get('tweets.json'), yield $.get('profile.json')];
    console.log(tweets, profile);
})();

//or set it up to yield an object and run this

Promise.coroutine(function* () {
    var data = yield {
        tweets: $.get('tweets.json'),
        profile: yield $.get('profile.json')
    };
    console.log(data.tweets, data.profile);
})();

function smartCode(generator) {
    return function() {
        var gen = generator.apply(this,arguments);

        function handleNext(yielded) {
            if (yielded.done) return yielded.value; //return final return value

            if (yielded.value.then) {
                return yielded.value.then(function(res) {
                    return handleNext(gen.next(res));
                }, function(err) {
                    return handleNext(gen.throw(err));
                });
            } else {
                return handleNext(gen.next(yielded.value));
            }
        }
    }
}
