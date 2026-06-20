"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check, ShieldAlert } from "lucide-react";

export default function EmailGate() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  // Generate numbers dynamically in browser to prevent hydration issues
  const generateNewQuestion = () => {
    const n1 = Math.floor(Math.random() * 20) + 1;
    const n2 = Math.floor(Math.random() * 20) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserAnswer("");
    setErrorMsg("");
  };

  useEffect(() => {
    setTimeout(() => {
      generateNewQuestion();
    }, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAns = num1 + num2;
    const parsedUserAns = parseInt(userAnswer.trim(), 10);

    if (isNaN(parsedUserAns)) {
      setErrorMsg("Please enter a numeric value.");
      return;
    }

    if (parsedUserAns === correctAns) {
      setIsRevealed(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Verification failed. Calculations mismatch.");
      generateNewQuestion();
    }
  };

  const getAssembledEmail = () => {
    // Dynamic non-plain text assembly to prevent scraping
    const p1 = "info";
    const p2 = "jailsoft";
    const p3 = "com";
    return `${p1}@${p2}.${p3}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getAssembledEmail());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback if clipboard fails in sandboxed iframe
      console.warn("Secure Clipboard failed or unauthorized under iFrame. Manually copying.");
    }
  };

  return (
    <div className="w-full max-w-md bg-black border border-neutral-800 p-8 text-white relative overflow-hidden">
      {/* Decorative side accent matching jail bars */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] flex flex-col space-y-[2px] opacity-40">
        <div className="bg-white flex-1" />
        <div className="bg-neutral-600 h-8" />
        <div className="bg-white h-20" />
        <div className="bg-neutral-800 flex-1" />
      </div>

      <div className="pl-4">
        <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block mb-1">
          CONTACT VERIFICATION
        </span>
        <h3 className="font-sans font-medium text-sm md:text-base uppercase tracking-widest text-white mb-6">
          Security Check
        </h3>

        {!isRevealed ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
              To prevent automated spam and secure our direct communications channels, please complete the quick arithmetic verification below:
            </p>

            <div className="bg-neutral-950 border border-neutral-900 p-4 font-mono text-xs text-neutral-400 space-y-1.5 rounded-sm">
              <span className="text-[10px] text-neutral-600">MATH CHALLENGE</span>
              <div className="text-white text-sm tracking-wider font-semibold">
                What is {num1} + {num2}?
              </div>
            </div>

            <div className="space-y-2">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter integer answer"
                className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-white focus:outline-none py-3 px-4 text-xs font-mono text-white transition-all rounded-sm tracking-widest"
                required
              />
              {errorMsg && (
                <div className="flex items-center space-x-1.5 text-red-500 font-mono text-[10px] uppercase tracking-wider animate-pulse pt-1">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-neutral-200 text-black py-3 px-4 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-200 border border-white"
            >
              Verify Check
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="bg-neutral-950 border-2 border-neutral-800 p-6 rounded-sm text-center relative overflow-hidden">
              <span className="font-mono text-[8px] text-neutral-500 block mb-1 uppercase tracking-widest">VERIFICATION SUCCESSFUL</span>
              
              <div className="font-mono text-sm md:text-base text-white tracking-widest font-semibold select-all py-2 border-b border-dashed border-neutral-850 mb-3 block">
                info@jailsoft.com
              </div>

              <div className="flex justify-center space-x-2 pt-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-[10px] tracking-widest font-sans uppercase font-bold text-black bg-white px-4 py-2 hover:bg-neutral-200 transition-colors border border-white"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied" : "Copy Email"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsRevealed(false)}
                  className="text-[10px] tracking-widest font-mono uppercase text-neutral-400 hover:text-white px-3 py-2 border border-neutral-800 hover:border-neutral-600 transition-all"
                >
                  Lock
                </button>
              </div>
            </div>

            <p className="font-sans text-[11px] text-neutral-500 leading-relaxed font-light text-center">
              Please include your name, organization, and primary details in the inquiry. Thank you!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
