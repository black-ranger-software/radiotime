<?php

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude('application/models/airtime/map')
    ->exclude('application/models/airtime/om');

$config = new PhpCsFixer\Config();
return $config->setRules([
    '@PhpCsFixer' => true,
    'concat_space' => ['spacing' => 'one'],
    'escape_implicit_backslashes' => false,
    'ordered_class_elements' => false,
    'yoda_style' => false,
])
    ->setFinder($finder);
