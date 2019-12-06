<template>
  <v-container>
    <h1>
      Hello World!
    </h1>
    <div>
      Description text here
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
          # Print the phrase "Hello World!"

        </code>
      </pre>
      <pre>
        <code data-type="solution">
          # Print the phrase "Hello World!"
          print("Hello World!")
        </code>
      </pre>
      <pre>
        <code data-type="sct">
          Ex().has_code("Hello World!")
          test_function("print")
          success_msg("Great job!")
        </code>
      </pre>
      <div data-type="hint">
        Use the (<code>print()</code>) method to print
        <code>"Hello World!"</code>.
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
