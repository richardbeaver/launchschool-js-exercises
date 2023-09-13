// Point Mutations

// Write a program that can calculate the Hamming distance between two
// DNA strands.

// A mutation is simply a mistake that occurs during the creation or copying
// of a nucleic acid, in particular DNA. Because nucleic acids are vital to
// cellular functions, mutations tend to cause a ripple effect throughout
// the cell. Although mutations are technically mistakes, a very rare mutation
// may equip the cell with a beneficial attribute. In fact, the macro effects
// of evolution are attributable to the accumulated result of beneficial
// microscopic mutations over many generations.

// The simplest and most common type of nucleic acid mutation is a point
// mutation, which replaces one base with another at a single nucleotide.

// By counting the number of differences between two homologous DNA strands
// taken from different genomes with a common ancestor, we get a measure of
// the minimum number of point mutations that could have occurred on the
// evolutionary path between the two strands.

// This is called the Hamming distance.

// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^

// The Hamming distance between these two DNA strands is 7.

// The Hamming distance is only defined for sequences of equal length. If you
// have two sequences of unequal length, you should compute the Hamming
// distance over the shorter length.

//

/*

Point mutation - replaces one base with another at a single nucleotide
Hamming distance - number of differences between two homologous DNA strands
  - Gives us minimum number of point mutations

- the example strands have 7 different characters at the same indexes
- so their hamming distance is 7

- if dna strands are unequal length, compute hamming distance over the shorter
  length
- all string inputs are uppercase

Examples

- test cases show we'll need a `DNA` class
- constructor - 1 argument (string of own dna strand)
  -
- `hammingDistance` - 1 argument (string of another dna strand)
  - return integer of hamming distance between dna's own string and the argument

Data Structure

input:
- string (own dna strand)
- string (other dna strans)
output:
- number (hamming distance)
rules:
- Can store dna strands as strings and compare as arrays of characters
  when needed

Algorithm

constructor
- save input DNA strand to a property

`hammingDistance` (otherStrand)
- Start a counter at 0
- For each index in [0, length of shorter strand):
  - if characters at the index in this strand and otherStrand are not equal:
    - increment counter by 1
- Return value of counter

*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let minLength = Math.min(this.strand.length, otherStrand.length);
    let differences = 0;

    for (let idx = 0; idx < minLength; idx += 1) {
      if (this.strand[idx] !== otherStrand[idx]) {
        differences += 1;
      }
    }
    return differences;
  }
}

module.exports = DNA;
