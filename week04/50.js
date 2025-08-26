"use strict";

/**
 * 50 JS Exercises — Array & String Manipulation (Google-style)
 * หมายเหตุ: ไม่มีเฉลย/ใบ้ เขียนโค้ดเองทุกฟังก์ชัน
 * มีตัวอย่าง input/expected output และ unit tests ให้ครบ
 * รันด้วย: node array-string-50-google-prep.js
 */

// -----------------------------------------------------------------------------
// Minimal Test Utilities
// -----------------------------------------------------------------------------
function deepEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b) return false;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }
    const ak = Object.keys(a).sort();
    const bk = Object.keys(b).sort();
    if (!deepEqual(ak, bk)) return false;
    for (const k of ak) {
      if (!deepEqual(a[k], b[k])) return false;
    }
    return true;
  }
  return false;
}

function assertDeepEqual(actual, expected, message) {
  if (!deepEqual(actual, expected)) {
    throw new Error(
      "❌ " + message + "\n  expected: " + JSON.stringify(expected) + "\n  actual:   " + JSON.stringify(actual)
    );
  }
}

const __results = { passed: 0, failed: 0 };
const __wrap = (name, testFn) => {
  try {
    testFn();
    console.log("✅", name);
    __results.passed++;
  } catch (e) {
    console.log("❌", name);
    console.log("   ", e.message);
    __results.failed++;
  }
};

function summary() {
  console.log("\n================ SUMMARY ================");
  console.log("Passed:", __results.passed, " Failed:", __results.failed);
  console.log("========================================\n");
}

// -----------------------------------------------------------------------------
// 01 reverseArray(arr)
// -----------------------------------------------------------------------------
/**
 * กลับลำดับสมาชิกของอาร์เรย์ใหม่ (ไม่แก้ของเดิม)
 * ตัวอย่าง: reverseArray([1,2,3]) -> [3,2,1]
 */
function p01_reverseArray(/* arr */) {}
__wrap("#01 reverseArray", () => {
  assertDeepEqual(p01_reverseArray([1, 2, 3]), [3, 2, 1], "reverse");
});

// -----------------------------------------------------------------------------
// 02 isPalindrome(str)
// -----------------------------------------------------------------------------
/**
 * ตรวจว่า str เป็น palindrome หรือไม่ (แยกแยะตัวพิมพ์เล็กใหญ่, รวมช่องว่างเป็นส่วนหนึ่งของสตริง)
 * ตัวอย่าง: isPalindrome("abba") -> true
 */
function p02_isPalindrome(/* str */) {}
__wrap("#02 isPalindrome", () => {
  assertDeepEqual(p02_isPalindrome("abba"), true, "abba true");
  assertDeepEqual(p02_isPalindrome("abc"), false, "abc false");
});

// -----------------------------------------------------------------------------
// 03 longestPalindromeSubstring(str)
// -----------------------------------------------------------------------------
/**
 * คืน substring ที่เป็น palindrome ที่ยาวที่สุด หากมีหลายคำตอบ รับคำตอบที่ถูกต้องใดก็ได้
 * ตัวอย่าง: longestPalindromeSubstring("cbbd") -> "bb"
 */
function p03_longestPalindromeSubstring(/* str */) {}
__wrap("#03 longestPalindromeSubstring", () => {
  assertDeepEqual(p03_longestPalindromeSubstring("cbbd"), "bb", "cbbd -> bb");
});

// -----------------------------------------------------------------------------
// 04 firstUniqueChar(str)
// -----------------------------------------------------------------------------
/**
 * คืน index ของตัวอักษรตัวแรกที่ไม่ซ้ำในสตริง ถ้าไม่มีให้คืน -1
 * ตัวอย่าง: firstUniqueChar("leetcode") -> 0
 */
function p04_firstUniqueChar(/* str */) {}
__wrap("#04 firstUniqueChar", () => {
  assertDeepEqual(p04_firstUniqueChar("leetcode"), 0, "l at 0");
  assertDeepEqual(p04_firstUniqueChar("aabb"), -1, "none");
});

// -----------------------------------------------------------------------------
// 05 isAnagram(s, t)
// -----------------------------------------------------------------------------
/**
 * ตรวจว่า s และ t เป็น anagram กันหรือไม่
 */
function p05_isAnagram(/* s, t */) {}
__wrap("#05 isAnagram", () => {
  assertDeepEqual(p05_isAnagram("anagram", "nagaram"), true, "ana ok");
  assertDeepEqual(p05_isAnagram("rat", "car"), false, "rat car");
});

// -----------------------------------------------------------------------------
// 06 groupAnagrams(strs)
// -----------------------------------------------------------------------------
/**
 * รวมคำที่เป็น anagram เข้าเป็นกลุ่ม ๆ คืนอาร์เรย์ของกลุ่ม (ลำดับกลุ่มไม่สำคัญ แต่ในที่ทดสอบนี้คงที่)
 */
function p06_groupAnagrams(/* strs */) {}
__wrap("#06 groupAnagrams", () => {
  const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
  assertDeepEqual(p06_groupAnagrams(input), expected, "group");
});

// -----------------------------------------------------------------------------
// 07 twoSum(nums, target)
// -----------------------------------------------------------------------------
/**
 * คืน index ของตัวเลขสองตัวที่รวมกันได้ target (สมมติว่ามีคำตอบเดียว)
 */
function p07_twoSum(/* nums, target */) {}
__wrap("#07 twoSum", () => {
  assertDeepEqual(p07_twoSum([2, 7, 11, 15], 9), [0, 1], "two sum");
});

// -----------------------------------------------------------------------------
// 08 threeSum(nums)
// -----------------------------------------------------------------------------
/**
 * คืนทริปเปิลที่ผลรวมเป็น 0 โดยไม่มีทริปเปิลซ้ำ เช่น [-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]
 */
function p08_threeSum(/* nums */) {}
__wrap("#08 threeSum", () => {
  const res = p08_threeSum([-1, 0, 1, 2, -1, -4]);
  const expected = [[-1, -1, 2], [-1, 0, 1]];
  assertDeepEqual(res, expected, "three sum");
});

// -----------------------------------------------------------------------------
// 09 maxSubarraySum(nums)
// -----------------------------------------------------------------------------
/**
 * ผลรวมย่อยต่อเนื่องที่มากที่สุด (Kadane)
 */
function p09_maxSubarraySum(/* nums */) {}
__wrap("#09 maxSubarraySum", () => {
  assertDeepEqual(p09_maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]), 6, "[4,-1,2,1]");
});

// -----------------------------------------------------------------------------
// 10 slidingWindowMax(nums, k)
// -----------------------------------------------------------------------------
/**
 * ค่ามากสุดของทุกหน้าต่างขนาด k
 */
function p10_slidingWindowMax(/* nums, k */) {}
__wrap("#10 slidingWindowMax", () => {
  assertDeepEqual(p10_slidingWindowMax([1,3,-1,-3,5,3,6,7], 3), [3,3,5,5,6,7], "swm");
});

// -----------------------------------------------------------------------------
// 11 rotateArrayRight(nums, k)
// -----------------------------------------------------------------------------
/**
 * หมุนอาร์เรย์ไปทางขวา k ตำแหน่ง คืนอาร์เรย์ใหม่
 */
function p11_rotateArrayRight(/* nums, k */) {}
__wrap("#11 rotateArrayRight", () => {
  assertDeepEqual(p11_rotateArrayRight([1,2,3,4,5,6,7], 3), [5,6,7,1,2,3,4], "rotate");
});

// -----------------------------------------------------------------------------
// 12 removeDuplicatesSortedArray(nums)
// -----------------------------------------------------------------------------
/**
 * รับอาร์เรย์เรียงจากน้อยไปมาก ตัดค่าซ้ำออก (ไม่แก้ของเดิม) คืนอาร์เรย์ใหม่
 */
function p12_removeDuplicatesSortedArray(/* nums */) {}
__wrap("#12 removeDuplicatesSortedArray", () => {
  assertDeepEqual(p12_removeDuplicatesSortedArray([1,1,2,2,3]), [1,2,3], "dedup");
});

// -----------------------------------------------------------------------------
// 13 mergeSortedArrays(a, b)
// -----------------------------------------------------------------------------
/**
 * รวมสองอาร์เรย์ที่เรียงแล้วให้ยังเรียงอยู่
 */
function p13_mergeSortedArrays(/* a, b */) {}
__wrap("#13 mergeSortedArrays", () => {
  assertDeepEqual(p13_mergeSortedArrays([1,3,5],[2,4,6]), [1,2,3,4,5,6], "merge");
});

// -----------------------------------------------------------------------------
// 14 moveZeroesToEnd(nums)
// -----------------------------------------------------------------------------
/**
 * ย้ายศูนย์ไปท้ายอาร์เรย์โดยคงลำดับที่ไม่ใช่ศูนย์ (คืนอาร์เรย์ใหม่)
 */
function p14_moveZeroesToEnd(/* nums */) {}
__wrap("#14 moveZeroesToEnd", () => {
  assertDeepEqual(p14_moveZeroesToEnd([0,1,0,3,12]), [1,3,12,0,0], "zeros");
});

// -----------------------------------------------------------------------------
// 15 productExceptSelf(nums)
// -----------------------------------------------------------------------------
/**
 * คืนอาร์เรย์ที่ตำแหน่ง i คือผลคูณของทุกตัวที่ไม่ใช่ i (ห้ามใช้หาร)
 */
function p15_productExceptSelf(/* nums */) {}
__wrap("#15 productExceptSelf", () => {
  assertDeepEqual(p15_productExceptSelf([1,2,3,4]), [24,12,8,6], "pes");
});

// -----------------------------------------------------------------------------
// 16 findMissingNumber(nums)
// -----------------------------------------------------------------------------
/**
 * จากอาร์เรย์ของเลข 0..n ที่หายไปหนึ่งตัว คืนเลขที่หายไป
 */
function p16_findMissingNumber(/* nums */) {}
__wrap("#16 findMissingNumber", () => {
  assertDeepEqual(p16_findMissingNumber([3,0,1]), 2, "missing 2");
});

// -----------------------------------------------------------------------------
// 17 findDuplicateNumber(nums)
// -----------------------------------------------------------------------------
/**
 * มีเลขซ้ำหนึ่งตัวในอาร์เรย์ที่ประกอบด้วย 1..n คืนเลขที่ซ้ำ
 */
function p17_findDuplicateNumber(/* nums */) {}
__wrap("#17 findDuplicateNumber", () => {
  assertDeepEqual(p17_findDuplicateNumber([1,3,4,2,2]), 2, "dup 2");
});

// -----------------------------------------------------------------------------
// 18 longestCommonPrefix(strs)
// -----------------------------------------------------------------------------
/**
 * คืน prefix ที่ยาวที่สุดร่วมกันของสตริงทั้งหมด
 */
function p18_longestCommonPrefix(/* strs */) {}
__wrap("#18 longestCommonPrefix", () => {
  assertDeepEqual(p18_longestCommonPrefix(["flower","flow","flight"]), "fl", "lcp");
});

// -----------------------------------------------------------------------------
// 19 countVowels(str)
// -----------------------------------------------------------------------------
/**
 * นับสระ (aeiou ทั้งพิมพ์เล็กใหญ่)
 */
function p19_countVowels(/* str */) {}
__wrap("#19 countVowels", () => {
  assertDeepEqual(p19_countVowels("Hello World"), 3, "eoo -> 3");
});

// -----------------------------------------------------------------------------
// 20 reverseWordsInSentence(s)
// -----------------------------------------------------------------------------
/**
 * กลับลำดับคำทั้งหมด (ตัดช่องว่างส่วนเกิน) เช่น "  the sky  is blue " -> "blue is sky the"
 */
function p20_reverseWordsInSentence(/* s */) {}
__wrap("#20 reverseWordsInSentence", () => {
  assertDeepEqual(p20_reverseWordsInSentence("  the sky  is blue "), "blue is sky the", "rev words");
});

// -----------------------------------------------------------------------------
// 21 validParentheses(s)
// -----------------------------------------------------------------------------
/**
 * ตรวจวงเล็บ (), {}, [] ถูกต้องหรือไม่
 */
function p21_validParentheses(/* s */) {}
__wrap("#21 validParentheses", () => {
  assertDeepEqual(p21_validParentheses("()[]{}"), true, "ok");
  assertDeepEqual(p21_validParentheses("(]"), false, "bad");
});

// -----------------------------------------------------------------------------
// 22 simplifyPath(path)
// -----------------------------------------------------------------------------
/**
 * ย่อ path สไตล์ Unix เช่น "/a/./b/../../c/" -> "/c"
 */
function p22_simplifyPath(/* path */) {}
__wrap("#22 simplifyPath", () => {
  assertDeepEqual(p22_simplifyPath("/a/./b/../../c/"), "/c", "unix path");
});

// -----------------------------------------------------------------------------
// 23 compressString(s)
// -----------------------------------------------------------------------------
/**
 * run-length encoding เช่น "aabcccccaaa" -> "a2b1c5a3"
 */
function p23_compressString(/* s */) {}
__wrap("#23 compressString", () => {
  assertDeepEqual(p23_compressString("aabcccccaaa"), "a2b1c5a3", "rle");
});

// -----------------------------------------------------------------------------
// 24 decompressString(s)
// -----------------------------------------------------------------------------
/**
 * inverse ของข้อ 23 เช่น "a2b1c5a3" -> "aabcccccaaa"
 */
function p24_decompressString(/* s */) {}
__wrap("#24 decompressString", () => {
  assertDeepEqual(p24_decompressString("a2b1c5a3"), "aabcccccaaa", "unrle");
});

// -----------------------------------------------------------------------------
// 25 frequencyMap(arr)
// -----------------------------------------------------------------------------
/**
 * สร้างแผนที่นับความถี่ของสมาชิก
 */
function p25_frequencyMap(/* arr */) {}
__wrap("#25 frequencyMap", () => {
  assertDeepEqual(p25_frequencyMap([1,1,2,3,3,3]), {1:2,2:1,3:3}, "freq");
});

// -----------------------------------------------------------------------------
// 26 topKFrequent(nums, k)
// -----------------------------------------------------------------------------
/**
 * คืน k ค่า ที่พบบ่อยที่สุด (ลำดับไม่เคร่ง)
 */
function p26_topKFrequent(/* nums, k */) {}
__wrap("#26 topKFrequent", () => {
  assertDeepEqual(p26_topKFrequent([1,1,1,2,2,3], 2), [1,2], "top2");
});

// -----------------------------------------------------------------------------
// 27 lengthOfLongestSubstringNoRepeat(s)
// -----------------------------------------------------------------------------
/**
 * ความยาว substring ที่ไม่มีอักขระซ้ำ
 */
function p27_lengthOfLongestSubstringNoRepeat(/* s */) {}
__wrap("#27 lengthOfLongestSubstringNoRepeat", () => {
  assertDeepEqual(p27_lengthOfLongestSubstringNoRepeat("abcabcbb"), 3, "abc -> 3");
});

// -----------------------------------------------------------------------------
// 28 minWindowSubstring(s, t)
// -----------------------------------------------------------------------------
/**
 * หน้าต่างย่อยที่เล็กที่สุดใน s ที่ครอบคลุมตัวทั้งหมดใน t (คำนึงจำนวนครั้ง)
 */
function p28_minWindowSubstring(/* s, t */) {}
__wrap("#28 minWindowSubstring", () => {
  assertDeepEqual(p28_minWindowSubstring("ADOBECODEBANC", "ABC"), "BANC", "min window");
});

// -----------------------------------------------------------------------------
// 29 isSubsequence(s, t)
// -----------------------------------------------------------------------------
/**
 * s เป็น subsequence ของ t หรือไม่
 */
function p29_isSubsequence(/* s, t */) {}
__wrap("#29 isSubsequence", () => {
  assertDeepEqual(p29_isSubsequence("abc", "ahbgdc"), true, "ok");
  assertDeepEqual(p29_isSubsequence("axc", "ahbgdc"), false, "no");
});

// -----------------------------------------------------------------------------
// 30 licenseKeyFormatting(s, k)
// -----------------------------------------------------------------------------
/**
 * จัดรูปแบบเป็นกลุ่มคั่นด้วย '-' กลุ่มแรกอาจสั้นกว่า ให้ตัวอักษรเป็นตัวพิมพ์ใหญ่
 */
function p30_licenseKeyFormatting(/* s, k */) {}
__wrap("#30 licenseKeyFormatting", () => {
  assertDeepEqual(p30_licenseKeyFormatting("5F3Z-2e-9-w", 4), "5F3Z-2E9W", "fmt");
});

// -----------------------------------------------------------------------------
// 31 addBigIntegers(a, b)
// -----------------------------------------------------------------------------
/**
 * บวกจำนวนเต็มบวกขนาดใหญ่ที่แทนด้วยสตริง
 */
function p31_addBigIntegers(/* a, b */) {}
__wrap("#31 addBigIntegers", () => {
  assertDeepEqual(p31_addBigIntegers("999", "1"), "1000", "big add");
});

// -----------------------------------------------------------------------------
// 32 multiplyBigIntegers(a, b)
// -----------------------------------------------------------------------------
/**
 * คูณจำนวนเต็มบวกขนาดใหญ่ที่แทนด้วยสตริง
 */
function p32_multiplyBigIntegers(/* a, b */) {}
__wrap("#32 multiplyBigIntegers", () => {
  assertDeepEqual(p32_multiplyBigIntegers("123", "456"), "56088", "big mul");
});

// -----------------------------------------------------------------------------
// 33 spiralOrder(matrix)
// -----------------------------------------------------------------------------
/**
 * เดินเมทริกซ์แบบก้นหอย
 */
function p33_spiralOrder(/* matrix */) {}
__wrap("#33 spiralOrder", () => {
  assertDeepEqual(p33_spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5], "spiral");
});

// -----------------------------------------------------------------------------
// 34 transposeMatrix(matrix)
// -----------------------------------------------------------------------------
/**
 * ทรานสโพสเมทริกซ์
 */
function p34_transposeMatrix(/* matrix */) {}
__wrap("#34 transposeMatrix", () => {
  assertDeepEqual(p34_transposeMatrix([[1,2,3],[4,5,6]]), [[1,4],[2,5],[3,6]], "transpose");
});

// -----------------------------------------------------------------------------
// 35 rotateMatrix90(matrix)
// -----------------------------------------------------------------------------
/**
 * หมุนเมทริกซ์ 90 องศาทางขวา (คืนเมทริกซ์ใหม่)
 */
function p35_rotateMatrix90(/* matrix */) {}
__wrap("#35 rotateMatrix90", () => {
  assertDeepEqual(p35_rotateMatrix90([[1,2],[3,4]]), [[3,1],[4,2]], "rot90");
});

// -----------------------------------------------------------------------------
// 36 setMatrixZeroes(matrix)
// -----------------------------------------------------------------------------
/**
 * ถ้ามีศูนย์ในตำแหน่งใด ให้ทั้งแถวและคอลัมน์นั้นเป็นศูนย์ (คืนเมทริกซ์ใหม่)
 */
function p36_setMatrixZeroes(/* matrix */) {}
__wrap("#36 setMatrixZeroes", () => {
  assertDeepEqual(p36_setMatrixZeroes([[1,1,1],[1,0,1],[1,1,1]]), [[1,0,1],[0,0,0],[1,0,1]], "mz");
});

// -----------------------------------------------------------------------------
// 37 intervalMerge(intervals)
// -----------------------------------------------------------------------------
/**
 * รวมช่วงที่ทับซ้อน เช่น [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
 */
function p37_intervalMerge(/* intervals */) {}
__wrap("#37 intervalMerge", () => {
  assertDeepEqual(p37_intervalMerge([[1,3],[2,6],[8,10],[15,18]]), [[1,6],[8,10],[15,18]], "merge int");
});

// -----------------------------------------------------------------------------
// 38 insertInterval(intervals, newInterval)
// -----------------------------------------------------------------------------
/**
 * แทรกช่วงใหม่แล้วรวมถ้าทับซ้อน เช่น [[1,3],[6,9]], [2,5] -> [[1,5],[6,9]]
 */
function p38_insertInterval(/* intervals, newInterval */) {}
__wrap("#38 insertInterval", () => {
  assertDeepEqual(p38_insertInterval([[1,3],[6,9]],[2,5]), [[1,5],[6,9]], "insert int");
});

// -----------------------------------------------------------------------------
// 39 binarySearch(arr, target)
// -----------------------------------------------------------------------------
/**
 * คืน index ถ้าพบ ไม่พบคืน -1 (อาร์เรย์เรียงจากน้อยไปมาก)
 */
function p39_binarySearch(/* arr, target */) {}
__wrap("#39 binarySearch", () => {
  assertDeepEqual(p39_binarySearch([1,2,3,4,5], 4), 3, "found");
  assertDeepEqual(p39_binarySearch([1,2,3,4,5], 6), -1, "not found");
});

// -----------------------------------------------------------------------------
// 40 searchRotatedArray(nums, target)
// -----------------------------------------------------------------------------
/**
 * หา target ในอาร์เรย์ที่ถูกหมุน เช่น [4,5,6,7,0,1,2]
 */
function p40_searchRotatedArray(/* nums, target */) {}
__wrap("#40 searchRotatedArray", () => {
  assertDeepEqual(p40_searchRotatedArray([4,5,6,7,0,1,2], 0), 4, "idx 4");
  assertDeepEqual(p40_searchRotatedArray([4,5,6,7,0,1,2], 3), -1, "no");
});

// -----------------------------------------------------------------------------
// 41 majorityElement(nums)
// -----------------------------------------------------------------------------
/**
 * คืนค่าที่ปรากฏมากกว่า n/2 ครั้ง (มีเสมอ)
 */
function p41_majorityElement(/* nums */) {}
__wrap("#41 majorityElement", () => {
  assertDeepEqual(p41_majorityElement([3,2,3]), 3, "maj 3");
});

// -----------------------------------------------------------------------------
// 42 findKthLargest(nums, k)
// -----------------------------------------------------------------------------
/**
 * คืนค่าที่มีลำดับที่ k จากมากไปน้อย
 */
function p42_findKthLargest(/* nums, k */) {}
__wrap("#42 findKthLargest", () => {
  assertDeepEqual(p42_findKthLargest([3,2,1,5,6,4], 2), 5, "kth 2");
});

// -----------------------------------------------------------------------------
// 43 lengthOfLIS(nums)
// -----------------------------------------------------------------------------
/**
 * ความยาวลำดับเพิ่มขึ้นยาวที่สุด (strictly increasing)
 */
function p43_lengthOfLIS(/* nums */) {}
__wrap("#43 lengthOfLIS", () => {
  assertDeepEqual(p43_lengthOfLIS([10,9,2,5,3,7,101,18]), 4, "LIS=4");
});

// -----------------------------------------------------------------------------
// 44 dailyTemperatures(T)
// -----------------------------------------------------------------------------
/**
 * สำหรับแต่ละวัน คืนจำนวนวันที่ต้องรอจนกว่าอุณหภูมิจะสูงขึ้น ถ้าไม่มีให้ 0
 */
function p44_dailyTemperatures(/* T */) {}
__wrap("#44 dailyTemperatures", () => {
  assertDeepEqual(p44_dailyTemperatures([73,74,75,71,69,72,76,73]), [1,1,4,2,1,1,0,0], "dt");
});

// -----------------------------------------------------------------------------
// 45 validAnagram(s, t)
// -----------------------------------------------------------------------------
/**
 * อีกเวอร์ชันของ anagram (ตัวพิมพ์เล็กใหญ่ถือว่าแตกต่าง)
 */
function p45_validAnagram(/* s, t */) {}
__wrap("#45 validAnagram", () => {
  assertDeepEqual(p45_validAnagram("anagram","nagaram"), true, "ok");
  assertDeepEqual(p45_validAnagram("rat","car"), false, "no");
});

// -----------------------------------------------------------------------------
// 46 zigzagConvert(s, numRows)
// -----------------------------------------------------------------------------
/**
 * แปลงเป็นรูปแบบซิกแซกแล้วอ่านทีละบรรทัด เช่น "PAYPALISHIRING", 3 -> "PAHNAPLSIIGYIR"
 */
function p46_zigzagConvert(/* s, numRows */) {}
__wrap("#46 zigzagConvert", () => {
  assertDeepEqual(p46_zigzagConvert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR", "zigzag");
});

// -----------------------------------------------------------------------------
// 47 atoi(s)
// -----------------------------------------------------------------------------
/**
 * แปลงสตริงเป็นจำนวนเต็ม ตามกติกาแบบ LeetCode 8 (ตัดช่องว่าง, สัญลักษณ์, overflow 32-bit)
 */
function p47_atoi(/* s */) {}
__wrap("#47 atoi", () => {
  assertDeepEqual(p47_atoi("   -42"), -42, "-42");
  assertDeepEqual(p47_atoi("4193 with words"), 4193, "4193");
  assertDeepEqual(p47_atoi("words and 987"), 0, "0");
  assertDeepEqual(p47_atoi("-91283472332"), -2147483648, "clamp");
});

// -----------------------------------------------------------------------------
// 48 strStr(haystack, needle)
// -----------------------------------------------------------------------------
/**
 * หา index ของ needle ใน haystack ถ้าไม่พบคืน -1
 */
function p48_strStr(/* haystack, needle */) {}
__wrap("#48 strStr", () => {
  assertDeepEqual(p48_strStr("sadbutsad", "sad"), 0, "0");
  assertDeepEqual(p48_strStr("leetcode", "leeto"), -1, "-1");
});

// -----------------------------------------------------------------------------
// 49 romanToInt(s)
// -----------------------------------------------------------------------------
/**
 * แปลงเลขโรมันเป็นจำนวนเต็ม เช่น "MCMXCIV" -> 1994
 */
function p49_romanToInt(/* s */) {}
__wrap("#49 romanToInt", () => {
  assertDeepEqual(p49_romanToInt("MCMXCIV"), 1994, "1994");
});

// -----------------------------------------------------------------------------
// 50 intToRoman(num)
// -----------------------------------------------------------------------------
/**
 * แปลงจำนวนเต็มเป็นเลขโรมัน เช่น 1994 -> "MCMXCIV"
 */
function p50_intToRoman(/* num */) {}
__wrap("#50 intToRoman", () => {
  assertDeepEqual(p50_intToRoman(1994), "MCMXCIV", "MCMXCIV");
});

// -----------------------------------------------------------------------------
// Run Summary
// -----------------------------------------------------------------------------
summary();
