<?php

/**
 * An elephpant
 */
class 🐘
{
    /**
     * Alive
     *
     * @var boolean
     */
    private $💓;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->💓 = true;
    }

    /**
     * Feed the elephant
     *
     * @param string $food This elephant only eats 🍉
     *
     * @return string 💩
     *
     * @throws 👻 The gost of the elephant
     */
    public function feed($food)
    {
        if ($food !== '🍉') {
            return $this->💀();
        }

        return '💩';
    }

    /**
     * Die!
     */
    public function 💀()
    {
        $this->💓 = false;

        throw new 👻($this);
    }
}
