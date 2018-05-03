using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Snake.Controllers
{
    [Route("api/[controller]")]
    public class PrimeController : Controller
    {
        private List<int> primes = new List<int>() { 2,3};

        [HttpGet("getPrime")]
        public IActionResult getNextPrime(Prime prime)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var list = new List<Prime>();

            int start = prime.id.Value;
            start = start * start;
            int end = prime.id.Value + 1;
            end = end * end;
            double diff = end- start;

            for (int i = start + 1; i < end; i++)
            {
                double dist = (i - start) / diff;
                double angle = (2 * dist) * Math.PI;

                Prime temp = new Prime();
                temp.id = i;
                temp.x = (float)(Math.Cos(angle) * (dist + prime.id));
                temp.y = (float)(Math.Sin(angle) * (dist + prime.id));
                temp.isPrime = isPrime(i);
                list.Add(temp);
            }

            list.Add(new Prime
            {
                id = prime.id + 1,
                x = prime.id + 1,
                y = 0,
                isPrime = false
            });

            return Ok(list);
        }

        private bool isPrime(int value)
        {
            if (value == 2 || value == 3)
                return true;

            var list = primes.Where(p => value % p == 0).ToList();
            if (list.Count == 0)
            {
                primes.Add(value);
                return true;
            }

            return false;
        }
    }
}
