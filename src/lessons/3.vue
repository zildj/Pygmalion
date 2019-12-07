<template>
  <v-container>
    <h1>
      Arithmetic Operations!
    </h1>
    <div>
      Python has the basic arithmetic operations built in. This means you can do addition (+), subtraction (-), multiplication (*) and division (/). Arithmetic operators can be used on two number or two variables containing numbers. This will be our first foray into making things happen with python!
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
          # Create a variable x and set it equal to 5
          # Create a variable y and set it equal to 6
          # Create a variable z and set it equal to the sum of 5 and 6 

          # Print out z
        </code>
      </pre>
      <pre>
        <code data-type="solution">
          # Create a variable x and set it equal to 5
          # Create a variable y and set it equal to 6
          # Create a variable z and set it equal to the sum of 5 and 6 
          x = 5
          y = 6
          z = x + y

          # Print out z
          print(z)
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
        Use the assignment operator (<code>=</code>) to set a
        <code>x = 5</code> . Use the addition operator (<code>+</code>) to add two numbers. Use the (<code>print(x)</code>) method to print the
        variable <code>a</code>.
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
