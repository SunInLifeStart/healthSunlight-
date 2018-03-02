import Vue from 'vue'
Vue.filter('currency', currency)

function currency(value, fractionSize, group_sep) {
  // console.log('value', fractionSize)
  const DECIMAL_SEP = '.'
  const ZERO_CHAR = '0'
  const MAX_DIGITS = 22

  const formats = {
    'GROUP_SEP': group_sep || ',',
    'PATTERNS': {
      'gSize': 3,
      'lgSize': 3,
      'maxFrac': 2,
      'minFrac': 2,
      'minInt': 1,
      'negPre': '-\u00a4',
      'negSuf': '',
      'posPre': '',
      'posSuf': ''
    }

  }

  function parse(numStr) {
    var exponent = 0
    var digits
    var numberOfIntegerDigits
    var i, j, zeros

    // Decimal point?
    if ((numberOfIntegerDigits = numStr.indexOf(DECIMAL_SEP)) > -1) {
      numStr = numStr.replace(DECIMAL_SEP, '')
    }

    // Exponential form?
    if ((i = numStr.search(/e/i)) > 0) {
      // Work out the exponent.
      if (numberOfIntegerDigits < 0) numberOfIntegerDigits = i
      numberOfIntegerDigits += +numStr.slice(i + 1)
      numStr = numStr.substring(0, i)
    } else if (numberOfIntegerDigits < 0) {
      // There was no decimal point or exponent so it is an integer.
      numberOfIntegerDigits = numStr.length
    }

    // Count the number of leading zeros.
    for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) { /* empty */ }

    if (i === (zeros = numStr.length)) {
      // The digits are all zero.
      digits = [0]
      numberOfIntegerDigits = 1
    } else {
      // Count the number of trailing zeros
      zeros--
      while (numStr.charAt(zeros) === ZERO_CHAR) zeros--

      // Trailing zeros are insignificant so ignore them
      numberOfIntegerDigits -= i
      digits = []
      // Convert string to array of digits without leading/trailing zeros.
      for (j = 0; i <= zeros; i++, j++) {
        digits[j] = +numStr.charAt(i)
      }
    }

    // If the number overflows the maximum allowed digits then use an exponent.
    if (numberOfIntegerDigits > MAX_DIGITS) {
      digits = digits.splice(0, MAX_DIGITS - 1)
      exponent = numberOfIntegerDigits - 1
      numberOfIntegerDigits = 1
    }

    return {
      d: digits,
      e: exponent,
      i: numberOfIntegerDigits
    }
  }
  /**
   * Round the parsed number to the specified number of decimal places
   * This function changed the parsedNumber in-place
   */
  function roundNumber(parsedNumber, fractionSize, minFrac, maxFrac) {
    var digits = parsedNumber.d
    var fractionLen = digits.length - parsedNumber.i

    // determine fractionSize if it is not specified; `+fractionSize` converts it to a number
    fractionSize = !fractionSize ? Math.min(Math.max(minFrac, fractionLen), maxFrac) : +fractionSize

    // The index of the digit to where rounding is to occur
    var roundAt = fractionSize + parsedNumber.i
    var digit = digits[roundAt]

    if (roundAt > 0) {
      // Drop fractional digits beyond `roundAt`
      digits.splice(Math.max(parsedNumber.i, roundAt))

      // Set non-fractional digits beyond `roundAt` to 0
      for (var j = roundAt; j < digits.length; j++) {
        digits[j] = 0
      }
    } else {
      // We rounded to zero so reset the parsedNumber
      fractionLen = Math.max(0, fractionLen)
      parsedNumber.i = 1
      digits.length = Math.max(1, roundAt = fractionSize + 1)
      digits[0] = 0
      for (var i = 1; i < roundAt; i++) digits[i] = 0
    }

    if (digit >= 5) {
      if (roundAt - 1 < 0) {
        for (var k = 0; k > roundAt; k--) {
          digits.unshift(0)
          parsedNumber.i++
        }
        digits.unshift(1)
        parsedNumber.i++
      } else {
        digits[roundAt - 1]++
      }
    }

    // Pad out with zeros to get the required fraction length
    for (; fractionLen < Math.max(0, fractionSize); fractionLen++) digits.push(0)

    // Do any carrying, e.g. a digit was rounded up to 10
    var carry = digits.reduceRight(function(carry, d, i, digits) {
      d = d + carry
      digits[i] = d % 10
      return Math.floor(d / 10)
    }, 0)
    if (carry) {
      digits.unshift(carry)
      parsedNumber.i++
    }
  }

  function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
    var isInfinity = !isFinite(number)
    var isZero = false
    var numStr = Math.abs(number) + ''
    var formattedText = ''
    var parsedNumber

    if (isInfinity) {
      formattedText = '\u221e'
    } else {
      parsedNumber = parse(numStr)
      roundNumber(parsedNumber, fractionSize, pattern.minFrac, pattern.maxFrac)
      var digits = parsedNumber.d
      var integerLen = parsedNumber.i
      var exponent = parsedNumber.e
      var decimals = []
      isZero = digits.reduce(function(isZero, d) {
        return isZero && !d
      }, true)

      // pad zeros for small numbers
      while (integerLen < 0) {
        digits.unshift(0)
        integerLen++
      }

      // extract decimals digits
      if (integerLen > 0) {
        decimals = digits.splice(integerLen, digits.length)
      } else {
        decimals = digits
        digits = [0]
      }

      // format the integer digits with grouping separators
      var groups = []
      if (digits.length >= pattern.lgSize) {
        groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''))
      }
      while (digits.length > pattern.gSize) {
        groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''))
      }
      if (digits.length) {
        groups.unshift(digits.join(''))
      }
      formattedText = groups.join(groupSep)

      // append the decimal digits
      if (decimals.length) {
        formattedText += decimalSep + decimals.join('')
      }

      if (exponent) {
        formattedText += 'e+' + exponent
      }
    }
    if (number < 0 && !isZero) {
      return pattern.negPre + formattedText + pattern.negSuf
    } else {
      return pattern.posPre + formattedText + pattern.posSuf
    }
  }
  // 默认小数点后保留两位
  if (!fractionSize) {
    fractionSize = 2
  }

  // if null or undefined pass it through
  return (value == null) ? value : formatNumber(value, formats.PATTERNS, formats.GROUP_SEP, DECIMAL_SEP, fractionSize)
}
