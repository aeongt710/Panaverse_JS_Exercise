    //Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
    function q2()
    {
        var name= "Ahmad"
        console.log(`Hello ${name}, would you like to learn some Python today?`)
    }

    //Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
    function q3()
    {
        var name = "ahmad"
        console.log(`Upper Case: ${name.toUpperCase()}`)
        console.log(`Lower Case: ${name.toLowerCase()}`)
        console.log(`Title Case: ${name.charAt(0).toUpperCase()+name.substring(1).toLocaleLowerCase()}`)
    }

    // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
    // Albert Einstein once said, “A person who never made a mistake never tried anything new.”
    function q4()
    {
        var author = "Issac Newton"
        var quote = "Every action has an equal and opposite reaction!"
        console.log(`${author} once said, "${quote}"`)
    }

    //Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
    function q5()
    {
        var famous_person = "Issac Newton"
        var quote = "Every action has an equal and opposite reaction!"
        var message = `${famous_person} once said, "${quote}"`
        console.log(message)
    }

    // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
    function q6()
    {
        var name="\t\tMuhammad\nAhmad\t\t"
        console.log("With spaces:\n"+name)
        console.log("without spaces\n",name.trim())
    }

    //Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
    function q7()
    {
        console.log(4*2)
        console.log(4+4)
        console.log(10-2)
        console.log(64/8)
    }
    // Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
    function q9(){
        var i=20
        var msg= "My fav number is "+i;
        console.log(msg)
    }

    //Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
    function q10()
    {
        //this function is for COMMET Question 
        console.log("demo")
    }

    //Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
    function q11()
    {
        var array =["Ahmad","Ali","Qasim","Majid"]
        array.forEach(element => {
            console.log(element)
        });
    }

    //Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
    function q12()
    {
        var msg="Welcome "
        var array =["Ahmad","Ali","Qasim","Majid"]
        array.forEach(element => {
            console.log(msg+element+"!")
        });
    }

    //Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
    function q13()
    {
        var list =["Bike","Cycle","Car","Airplane","Boat"]
        list.forEach(element => {
            console.log(`I would like to own a ${element}.`)
        });
    }

    //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
    function q14()
    {
        var list =["Ahmad","Ali","Qasim","Majid"]
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });
    }

    // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
    // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
    // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
    // • Print a second set of invitation messages, one for each person who is still in your list.
    function q15()
    {
        var list =["Ahmad","Ali","Qasim","Majid"]
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });
        var p1 = Math.floor(Math.random() *list.length);
        console.log(`${list[p1]} cant make to dinner`)
        var p2 = Math.floor(Math.random() *list.length);
        console.log(`${list[p2]} cant make to dinner`)

        list[p1] = "Usman"
        list[p2] = "Burhan"

        console.log("new inviatations")
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });
    }
    // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
    // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
    // • Add one new guest to the beginning of your array.
    // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
    function q16()
    {
        var list =["Ahmad","Ali","Qasim","Majid"]
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });
        var p1 = Math.floor(Math.random() *list.length);
        console.log(`${list[p1]} cant make to dinner`)
        var p2 = Math.floor(Math.random() *list.length);
        console.log(`${list[p2]} cant make to dinner`)

        list[p1] = "Usman"
        list[p2] = "Burhan"

        console.log("new inviatations")
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });

        list.unshift("Abaseen")
        list.splice(list.length/2,0,"Omer")
        list.push("Gulfam")
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner at BIG Table`)
        });
    }

    // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
    // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
    // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
    // • Print a message to each of the two people still on your list, letting them know they’re still invited.
    // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
    function q17()
    {
        var list =["Ahmad","Ali","Qasim","Majid"]
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });
        var p1 = Math.floor(Math.random() *list.length);
        console.log(`${list[p1]} cant make to dinner`)
        var p2 = Math.floor(Math.random() *list.length);
        console.log(`${list[p2]} cant make to dinner`)

        list[p1] = "Usman"
        list[p2] = "Burhan"

        console.log("new inviatations")
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });

        list.unshift("Abaseen")
        list.splice(list.length/2,0,"Omer")
        list.push("Gulfam")
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner at BIG Table`)
        });

        for(let i=list.length;i>2;i--)
            console.log(`${list.pop()} left the group`)
        list.forEach(person => {
            console.log(`${person} is still invited`)
        });
        for(let i=list.length;i>0;i--)
            console.log(`${list.pop()} also left the group`)
    }

    // Seeing the World: Think of at least five places in the world you’d like to visit.
    // • Store the locations in a array. Make sure the array is not in alphabetical order.
    // • Print your array in its original order.
    // • Print your array in alphabetical order without modifying the actual list.
    // • Show that your array is still in its original order by printing it.
    // • Print your array in reverse alphabetical order without changing the order of the original list.
    // • Show that your array is still in its original order by printing it again.
    // • Reverse the order of your list. Print the array to show that its order has changed.
    // • Reverse the order of your list again. Print the list to show it’s back to its original order.
    // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

    function q18()
    {
        var list = ["Islamabad","Karchi","Abbottabad","Lahore","Faislabad"];
        console.log("Original List");
        list.forEach(element => {
            console.log(element)
        });

        console.log("Ordered List");
        ([...list].sort()).forEach(element => {
            console.log(element)
        });
        
        console.log("Reverse List");
        list.reverse().forEach(element => {
            console.log(element)
        });

        console.log("Reverse again to get origial List");
        list.reverse().forEach(element => {
            console.log(element)
        });

        console.log("Alphabetical order")
        list.sort().forEach(element => {
            console.log(element)
        });

        console.log("Reverse Alphabetical order")
        list.reverse().forEach(element => {
            console.log(element)
        });

    }
    //Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

    function q19()
    {
        var list =["Ahmad","Ali","Qasim","Majid"]
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });
        var p1 = Math.floor(Math.random() *list.length);
        console.log(`${list[p1]} cant make to dinner`)
        var p2 = Math.floor(Math.random() *list.length);
        console.log(`${list[p2]} cant make to dinner`)

        list[p1] = "Usman"
        list[p2] = "Burhan"

        console.log("new inviatations")
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner`)
        });

        list.unshift("Abaseen")
        list.splice(list.length/2,0,"Omer")
        list.push("Gulfam")
        list.forEach(person => {
            console.log(`I would like to invite ${person} to dinner at BIG Table`)
        });

        console.log(list.length+" person are invited to dinner")
    }

    //Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

    function q20()
    {
        var array =new Array();
        array.push("English")
        array.push("Urdu")
        array.push("Arabic")
        array.push("Punjabi")
        array.push("French")
        
        console.log("List of languages")
        array.forEach(element => {
            console.log(element)
        });
    }


    //They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

    function q21()
    {
        var person ={
            name:"Ahmad",
            age:20,
            city:"Abbottbad"
        }
        console.log(person)
    }

    //Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
    function q22()
    {
        var array =new Array();
        array.push("English")
        array.push("Urdu")
        array.push("Arabic")
        array.push("Punjabi")
        array.push("French")

        try {
            console.log(array[20])
        } catch (error) {
            console.log(error)
        }
        console.log(array[2])
    }

    // Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
    // let car = 'subaru';
    // console.log("Is car == 'subaru'? I predict True.")
    // console.log(car == 'subaru')
    // • Look closely at your results, and make sure you understand why each line evaluates to True or False.
    // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
    function q23(param) 
    {
        console.log(5==20/2)
        console.log("ahmad".toString()==="AHMad".toString())
        console.log("ahmad".toLowerCase()=="AHMad".toLowerCase())
        console.log(20%2==0?true:false)
        var color="green"
        console.log(color=="gree")
        var age=20
        console.log(100/5==age)
        var mobile="my age is 20"
        console.log(mobile.includes(String(20)))
        var intro="my Name is AhmAd"
        console.log(intro.toLowerCase().includes("ahmad".toLowerCase()))
        console.log((5==1/2&&color==="green"))
        console.log(age.toString()==mobile)
    }

    // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
    // • Tests for equality and inequality with strings
    // • Tests using the lower case function
    // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
    // • Tests using "and" and "or" operators
    // • Test whether an item is in a array
    // • Test whether an item is not in a array
    function q24()
    {
        console.log(`Equality or inequality${"ahmad".toString()!="Ahmad".toString()}`)
        console.log(`Equality or inequality${"ahmad".toString()=="ahMad".toString()}`)

        console.log(`Equality or inequality${"ahmad".toString().toLowerCase()=="Ahmad".toString().toLowerCase()}`)
        console.log(`Equality or inequality${"ahmad".toString().toLowerCase()=="ahMad".toString().toUpperCase()}`)

        console.log(`Numerical tests: ${5>2==true}`)
        console.log(`Numerical tests: ${5%2!=0}`)
        console.log(`Numerical tests: ${5%2<=0}`)

        console.log(`'AND' 'OR' tests: ${(5%2<=0)||("ahmad".toString()=="ahMad".toString())}`)
        console.log(`'AND' 'OR' tests: ${(5+50>0)&&("ahmad".toString().toLowerCase()=="ahMad".toString().toLowerCase())}`)


        var array =new Array();
        array.push("English")
        array.push("Urdu")
        array.push("Arabic")
        array.push("Punjabi")
        array.push("French")
        console.log(`Array test: ${array.includes("English")}`)
        console.log(`Array test: ${array.includes("EngLISH")}`)

        console.log(`Array test: ${!array.includes("English")}`)
        console.log(`Array test: ${!array.includes("EngLISH")}`)
    }

    // Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
    // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
    // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
    function q25()
    {
        var alien_color = "green"
        if(alien_color=="green")
            console.log("Player just earned 5 points")
        if(alien_color=="no color"){}
    }

    // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
    // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
    // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
    // • Write one version of this program that runs the if block and another that runs the else block.
    function q26()
    {
        var alien_color = "green"
        // runs if
        if(alien_color=="green")
            console.log("Player just earned 10 points")
        else{console.log("Nothing...")}

        //runs else
        alien_color = "red"
        // runs if
        if(alien_color=="green")
            console.log("Player just earned 10 points")
        else{console.log("Nothing...")}
    }

    // Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
    // • If the alien is green, print a message that the player earned 5 points.
    // • If the alien is yellow, print a message that the player earned 10 points.
    // • If the alien is red, print a message that the player earned 15 points.
    // • Write three versions of this program, making sure each message is printed for the appropriate color alien.
    function q27()
    {
        q27Run("red")
        q27Run("green")
        q27Run("yellow")

        function q27Run(alien_color){
            if(alien_color=="green")
                console.log("Player just earned 5 points")
            else if(alien_color=="yellow")
                console.log("Player just earned 10 points")
            else if(alien_color=="red")
                console.log("Player just earned 15 points")
        }
    }
    

    // Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
    // • If the person is less than 2 years old, print a message that the person is a baby.
    // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    // • If the person is age 65 or older, print a message that the person is an elder.
    
    function q28()
    {
        var age=20
        if(age<2)
            console.log("Baby")
        else if(age<4)
            console.log("Toddler")
        else if(age<13)
            console.log("Kid")
        else if(age<20)
            console.log("Teenager")
        else if(age<65)
            console.log("Adult")
        else
            console.log("Elder")
    }
    

    // Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
    // • Make a array of your three favorite fruits and call it favorite_fruits.
    // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

    function q29()
    {
        var favorite_fruits=["Mango","Apple","Banana"]
        if(favorite_fruits.includes("Mango"))
            console.log("Your really like Mango")
        if(favorite_fruits.includes("Strawberry"))
            console.log("Your really like Strawberry")
        if(favorite_fruits.includes("Apple"))
            console.log("Your really like Apple")
        if(favorite_fruits.includes("Watermelon"))
            console.log("Your really like Watermelon")
        if(favorite_fruits.includes("Dates"))
            console.log("Your really like Dates")
    }
    
    // Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
    // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

    function q30()
    {
        var usernames = ["admin","hr","accountant","developer","guard"]
        usernames.forEach(element => {
            if(element=="admin")
                console.log(`Hello ${element}, would you like to see a status report?`)
            else
                console.log(`Hello ${element}, thank you for logging in again`)
        });
    }


    // No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
    // • If the list is empty, print the message We need to find some users!
    // • Remove all of the usernames from your array, and make sure the correct message is printed.
    function q31()
    {
        var usernames = ["admin","hr","accountant","developer","guard"]
        if(usernames.length>0)
        {
            usernames.forEach(element => {
                if(element=="admin")
                    console.log(`Hello ${element}, would you like to see a status report?`)
                else
                    console.log(`Hello ${element}, thank you for logging in again`)
            });
        }
        else{
            console.log("Need to Add new users")
        }


        // after removing all users

        while(usernames.length>0)
        {
            console.log(usernames.pop()+" removed")
        }

        if(usernames.length>0)
        {
            usernames.forEach(element => {
                if(element=="admin")
                    console.log(`Hello ${element}, would you like to see a status report?`)
                else
                    console.log(`Hello ${element}, thank you for logging in again`)
            });
        }
        else{
            console.log("Need to Add new users")
        }
    }
    

    // Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
    // • Make a list of five or more usernames called current_users.
    // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
    // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
    // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

    function q32()
    {
        var current_users = ["admin","hr","accountant","developer","guard"]
        var new_users = ["hR","accOuntant","Driver","POSTMAN","sweaper"]
        new_users.forEach(outer => {
            var isAvailable = true;
            current_users.forEach(inner=>{
                if(outer.toLowerCase()==inner.toLowerCase())
                {
                    console.log("Not availabe, enter new username")
                    isAvailable = false
                }
            });
            if(isAvailable)
                console.log("Username is available")
        });

    }

    // Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
    // • Store the numbers 1 through 9 in a array.
    // • Loop through the array.
    // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

    function q33()
    {
        var nums = [1,2,3,4,5,6,7,8,9]
        nums.forEach(element => {
            if(element==1)
                console.log(`${element}st`)
            else if(element==2)
                console.log(`${element}nd`)
            else if(element==3)
                console.log(`${element}rd`)
            else
                console.log(`${element}th`)
        });
    }

    // Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
    // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
    // • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

    function q34()
    {
        var pizzas=["BBQ pizza","Cheeze pizza","Chicken tikka pizza"]
        for(let i=0;i<pizzas.length;i++)
            console.log(`I like ${pizzas[i]}`)
        console.log("Humans are drawn to foods that are fatty, sweet, rich and complex. Pizza has all of these components. Cheese is fatty, meat toppings tend to be rich and the sauce is sweet. Pizza toppings are also packed with a compound called glutamate, which can be found in the tomatoes, cheese, pepperoni and sausage.")
    }

    //Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
    function q35()
    {
        var animals=["Parrot","Eagle","Sparrow"]
        for(let i=0;i<animals.length;i++)
            console.log(`${animals[i]} would make a great pet`)
        console.log("These animals have 2 eggs, gorgous and have high metabolism")
        console.log("All of them would make a great pet")
    }


    //T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

    function q36()
    {
        make_shirt("medium","Im Pakistani")
        function make_shirt(size,text){
            console.log(`Printing shirt of size ${size}, having text ${text}`)
        }
    }

    //Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

    function q37()
    {
        make_shirt("medium","I love JavaScript")
        function make_shirt(size,text){
            if(text=="I love JavaScript")
                console.log(`Printing shirt of size large, having text ${text}`)
            else
                console.log(`Printing shirt of size ${size}, having text ${text}`)
        }
    }
    

    //Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


    function q38()
    {
        describe_city("Islamabad")
        describe_city("USA","New York")
        describe_city("Qatar","Doha")
        function describe_city(country="Pakistan",city){
            console.log(`${city} is in ${country}`)
        }
    }

    // City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
    // "Lahore, Pakistan"
    // Call your function with at least three city-country pairs, and print the value that’s returned.

    function q39()
    {
        console.log("Islamabad","Pakistan")
        function city_country(city,country){
            return city+", "+country;
        }
    }

    //Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

    function q40()
    {
        console.log(make_album("ahmad","SONG"))
        console.log(make_album("ahmad","SONG2",20))
        function make_album(name,title,track=0)
        {
            var value ={
                artistName:name,
                artistTitle:title
            }
            if(track!=0)
                value.tracks = track
            return value
        }
    }

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
    function q41()
    {
        var magicians=["Ahmad","Ali","Qasim","Majid","Waqas"]
        function show_magicians(params)
        {
            params.forEach(element => {
                console.log(element)
            });
        }
    }

//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

    function q42()
    {
        var magicians=["Ahmad","Ali","Qasim","Majid","Waqas"]
        magicians=make_great(magicians)
        show_magicians(magicians)

        function make_great(params)
        {
            for(let i=0;i<params.length;i++)
                params[i]="Great "+params[i]
            return params
        }
        function show_magicians(params)
        {
            params.forEach(element => {
                console.log(element)
            });
        }
    }


    //Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
    function q43()
    {
        var magicians=["Ahmad","Ali","Qasim","Majid","Waqas"]
        var modified=make_great(magicians)

        console.log("Original Array")
        show_magicians(magicians)

        console.log("Modified Array")
        show_magicians(modified)


        function make_great(params)
        {
            for(let i=0;i<params.length;i++)
                params[i]="Great "+params[i]
            return params
        }

        function show_magicians(params)
        {
            params.forEach(element => {
                console.log(element)
            });
        }
    }

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

    function q44()
    {
        order_sandwich("Sandwitch 1","Sandwitch 2","Sandwitch 3","Sandwitch 4")
        order_sandwich("Sandwitch A","Sandwitch B","Sandwitch C")
        order_sandwich("Sandwitch A","Sandwitch B")
        function order_sandwich(...list)
        {
            console.log("You ordered follow sanwitches...")
            list.forEach(element => {
                console.log(element)
            });
        }
    }

//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

    function q45()
    {
        console.log(make_car("Honda","Civic","color","year"))
        function make_car(manufacturer,model,...params)
        {
            console.log("You ordered follow sanwitches...")
            var obj={
                manufacturer:manufacturer,
                model:model
            }
            params.forEach(element => {
                obj[element] = element
            });
            return obj
        }
    }
    q45()


