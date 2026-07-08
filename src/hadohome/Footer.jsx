import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] border-t border-slate-800 text-slate-400 py-12 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Segment: Brand & Quick Index Link Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white block">
              Hado Global Service
            </span>
            <p className="text-sm max-w-sm text-slate-400 leading-relaxed">
              Engineering high-performance software architecture, intelligent automation systems, and enterprise-grade infrastructure.
            </p>
            {/* Added subtle social hooks to match premium service sites */}
                <div className="flex items-center gap-4 pt-2 text-slate-500">
                  <a
                    href="https://linkedin.com"
                    className="hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com"
                    className="hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                  </a>

                  <a
                    href="mailto:info@hadoglobalservice.com"
                    className="hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  </a>
                </div>
          </div>

          {/* Quick Index Menu Column 1 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
            <a
              href="#services"
              className="hover:text-white transition-colors flex items-center gap-1 group"
            >
              Services
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
              </li>
              <li>
          <a
            href="#services"
            className="hover:text-white transition-colors flex items-center gap-1 group"
          >
            About Us
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
            />
       </a>
              </li>
              <li>
                {/* <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Contact <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a> */}
              </li>
            </ul>
          </div>

          {/* Quick Index Menu Column 2 (Legal) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500">
            {/* Fixed the company name mismatch here */}
            &copy; {new Date().getFullYear()} Hado Global Service. All rights reserved.
          </div>
          <div className="text-slate-600 font-mono tracking-wider uppercase text-[10px]">
            Optimized for enterprise scale.
          </div>
        </div>

      </div>
    </footer>
  );
}