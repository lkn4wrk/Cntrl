
(module
  (memory 1
    (segment 0 "\10\00\00\00")     ;; Here comes the size of the code in LSB
    (segment 4 "Hello World CODE") ;; Here comes the code as a escaped hex string
  )
  (export "memory" memory)
  (export "main" $main)
  (import $ethereum_return "ethereum" "return" (param i32 i32))
  (func $main
    (call_import $ethereum_return (i32.const 4) (i32.load (i32.const 0)))
  )
)
