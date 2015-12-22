
function ZWJ(form, formula, result)
{
    this.form    = form;
    this.formula = formula;
    this.result  = result;

    this.resolve = this.resolve.bind(this);

    this.form.addEventListener('change', this.resolve);
    this.form.addEventListener('submit', this.cancel);

    setTimeout(this.resolve, 100);
}

/**
 * Connector
 *
 * @type {String}
 */
ZWJ.prototype.connector = '&zwj;';

/**
 * Heart
 *
 * @type {String}
 */
ZWJ.prototype.heart = '❤️';

/**
 * Resolve sentence from inputs
 */
ZWJ.prototype.resolve = function()
{
    this.result.innerHTML  = this.getSentence(this.connector);
    this.formula.innerHTML = this.getSentence(this.connector.replace('&', '&amp;'));
};

/**
 * Get sentence from form
 *
 * @return {String}
 */
ZWJ.prototype.getSentence = function(connector)
{
    return this.form.from.value + connector + this.heart + connector + this.form.to.value;
};

/**
 * Cancel event
 *
 * @param {Event} event
 */
ZWJ.prototype.cancel = function(event)
{
    event.preventDefault();
}
