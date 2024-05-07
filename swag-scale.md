---
title: The Swag Scale
layout: page
---

# The SWAG Scale 

<form markdown="1" action="/submit" method="post">

## Year of issue

<select name="choices" id="choices">
    <option value="5">'37-'54 - Golden Age / Pre-Code </option>
    <option value="4">'55-'62 - Early Silver Age</option>
    <option value="3">'63-'72 - Late Silver / Early Bronze</option>
    <option value="2">'73-'76 - Bronze</option>
    <option value="1">'77+ - Copper / Modern</option>
  </select>

## Supply

CGC Census

<select name="choices" id="choices">
    <option value="5">0-300</option>
    <option value="4">301-700</option>
    <option value="3">701-4000</option>
    <option value="2">4001-8000</option>
    <option value="1">8,001-20,0000</option>
  </select>

## Popularity

Popularity of main characters (heroes / villians)

  <select name="popularity" id="popularity">
    <option value="5">Top 20 hero / 10 villain</option>
    <option value="4">Top 40 hero / 20 villain</option>
    <option value="3">Top 60 / 30 villain</option>
    <option value="2">Top 100 / 50 villain</option>
    <option value="1">Top 150 / 75 villain</option>
  </select>

## Historical Demand

How many people want this book in their collection?

<select name="choices" id="choices">
    <option value="5">Everyone</option>
    <option value="4">Most</option>
    <option value="3">Many</option>
    <option value="2">Some</option>
    <option value="1">Few</option>
  </select>

## Aesthetics

  <input type="checkbox" id="cover" name="cover">
  <label for="cover">Cover - Exemplifies the significance of the book</label><br>
  <input type="checkbox" id="coolCover" name="coolCover">
  <label for="coolCover">Cool Cover - Is it cool?</label><br>
  <input type="checkbox" id="comicSeries" name="comicSeries">
  <label for="comicSeries">Comic Series - Is the series of general interest?</label><br>
  <input type="checkbox" id="credits" name="credits">
  <label for="credits">Credits - Are the authors/artists well-known / important?</label><br>
  <input type="checkbox" id="controversy" name="controversy">
  <label for="controversy">Controversy? - Is there some controversy about the book?</label><br>


  <input type="submit" value="Submit">
</form>
