<template>
  <v-container>
    <h1>
      Variables!
    </h1>
    <div>
      Variables are an important part of coding. Variables allow you to store values so you can call back to them later. This makes code easier to read later, and saves writing time. Saving a value to a variable means you don't have to get that value again every time you need it. This also prevents possible errors. When you have to type something out over and over, there's a chance you might mistype it. Variables prevent this from happening! To decalre a variable, you give it a name, like x, or my_variable, and use the equal sign (=) to set it equal to a value, like 5 or "my variable value". Variables can beging with a letter or an underscore, but not a number or other special symbols. It is also important to note that variables are case sensitive, so x is not the same as X!
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

          # Print out x
        </code>
      </pre>
      <pre>
        <code data-type="solution">
          # Create a variable x and set it equal to 5
          x = 5

          # Print out x
          print(x)
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
        <code>x = 5</code> . Use the (<code>print(x)</code>) method to print the
        variable <code>a</code>.
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
