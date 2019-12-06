<template>
  <v-container>
    <h1>
      Declaring Functions!
    </h1>
    <div>
      Functions are our next foray into making things happen with python. Functions can do anything you tell them to. Functions take arguments that they perform actions on, and return a final value. To define a function, use "def" followed by the name of the function, then a list of arguments in parentheses, and a colon. The content of the function is contained by the function using indentation. To return a value at the end, use the statement "return" followed by the value. Our first function will be very simple, but they can do so much more! You'll see.
    </div>
    <br />
    <div data-no-lazy-loading data-datacamp-exercise data-lang="python">
      <pre>
        <code data-type="pre-exercise-code">
          # no pec
        </code>
      </pre>
      <pre>
        <code data-type="sample-code">
          # Define a function that multiplies two numbers, x and y
          # Define a variable prod that stores the product of 3 and 4 using your function

          # Print out prod

        </code>
      </pre>
      <pre>
        <code data-type="solution">
          # Define a function that multiplies two numbers, x and y
          def product (x,y):
            return x * y
          # Define a variable prod that stores the product of 3 and 4 using your function
          prod = product(3,4)
          # Print out prod
          print(prod)
        </code>
      </pre>
      <pre>
        <code data-type="sct">
          test_object("x")
          test_function("print")
          success_msg("Great job!")
        </code>
      </pre>
      <div data-type="hint">
        define a function using (<code>def name_of_function (args):</code>) to define the function. Tab in then return a value with (<code>return value</code>) Recall the arithmetic operator for multiplcation from the last lesson is (<code>*</code>).
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
