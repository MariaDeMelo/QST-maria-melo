<?php
    use PHPUnit\Framework\TestCase;

    // Miguel
    // Rodar o teste ' .\vendor\bin\phpunit .\CalculatorTest.php '

    class Calculator //funções
    {
        public function soma($a, $b)
        {
            return $a + $b;
        }

        public function concatenar($string1, $string2)
        {
            return $string1 . $string2;
        }

        public function multiplicacao($a, $b)
        {
            return $a * $b;
        }
    }

    class CalculatorTest extends TestCase  //testeees
    {
        public function testSoma()
        {
            $calculator = new Calculator();
            $result = $calculator->soma(2, 3);
            $this->assertEquals(5, $result);
        }

        public function testConcatenar()
        {
            $calculator = new Calculator();
            $result = $calculator->concatenar("Hello", " World");
            $this->assertEquals("Hello ", $result); 
        }

        public function testMultiplicacao()
        {
            $calculator = new Calculator();
            $result = $calculator->multiplicacao(2, 6);
            $this->assertEquals(12, $result); 
        }
    }

