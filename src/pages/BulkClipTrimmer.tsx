import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Film, Music, FastForward, Settings, Layers, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';

const BulkClipTrimmer: React.FC = () => {
  const { toast } = useToast();
  
  // Microsoft Store direct links
  const msStoreBrowserUrl = 'https://apps.microsoft.com/detail/9npxbvrgrdh3'; // For non-Windows devices
  const msStoreAppUrl = 'ms-windows-store://pdp/?productid=9npxbvrgrdh3'; // Direct to MS Store app

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <header className="p-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-neon-blue transition-colors">
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green">
              Bulk Clip Trimmer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Speed up your video editing workflow with lightning-fast clip trimming and batch processing
            </p>
            
            <div className="mt-10">
              <div className="inline-block">
                <a href={msStoreAppUrl} onClick={(e) => {
                  // Fallback for non-Windows devices
                  if (!navigator.userAgent.includes('Windows')) {
                    e.preventDefault();
                    window.open(msStoreBrowserUrl, '_blank');
                  }
                }}>
                  <img 
                    src="https://get.microsoft.com/images/en-us%20dark.svg" 
                    alt="Get BatchSnip - Bulk Clip Trimmer from Microsoft Store" 
                    className="w-auto h-20"
                  />
                </a>
              </div>
              <p className="text-gray-400 mt-3 text-sm">Now available on the Microsoft Store</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Use Bulk Clip Trimmer?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transform transition-all hover:border-neon-green hover:-translate-y-1">
              <div className="bg-gray-700/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FastForward className="text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast Workflow</h3>
              <p className="text-gray-400">
                Trim clips in seconds and immediately move to the next one while processing happens in the background.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transform transition-all hover:border-neon-green hover:-translate-y-1">
              <div className="bg-gray-700/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Layers className="text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Batch Processing</h3>
              <p className="text-gray-400">
                Queue up multiple clips and let the application handle them all at once, saving you valuable time.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transform transition-all hover:border-neon-green hover:-translate-y-1">
              <div className="bg-gray-700/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Settings className="text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Output Options</h3>
              <p className="text-gray-400">
                Configure output folders for video or audio exports separately, with customizable quality settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                    Configure Your Output
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Set up your preferred output folders for video and audio exports. Choose quality settings and default formats.
                  </p>
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                    <code className="text-sm text-neon-blue">
                      Video Output: D:/Edited_Videos<br/>
                      Audio Output: D:/Extracted_Audio<br/>
                      Format: MP4 / Quality: High
                    </code>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-lg">
                  <div className="aspect-video bg-black relative rounded overflow-hidden flex items-center justify-center">
                    <Settings className="text-neon-green w-20 h-20 opacity-30" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-lg">
                  <div className="aspect-video bg-black relative rounded overflow-hidden flex items-center justify-center">
                    <Film className="text-neon-green w-20 h-20 opacity-30" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                    Select Start & End Points
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Quickly navigate through your clip and set precise start and end points with frame-accurate controls.
                  </p>
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                    <code className="text-sm text-neon-blue">
                      Start: 00:01:15.240<br/>
                      End: 00:01:25.830<br/>
                      Duration: 10.59s
                    </code>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                    Queue and Process
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Add to queue and immediately move on to the next clip while processing continues in the background.
                  </p>
                  <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                    <code className="text-sm text-neon-blue">
                      Processing: clip_034.mp4 (2/8)<br/>
                      In Queue: 6 items<br/>
                      Completed: 1 item
                    </code>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-lg">
                  <div className="aspect-video bg-black relative rounded overflow-hidden flex items-center justify-center">
                    <Layers className="text-neon-green w-20 h-20 opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4">
              <div className="mt-1">
                <Clock className="text-neon-green" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Save Hours of Editing Time</h3>
                <p className="text-gray-400">
                  Process clips 5x faster than traditional editing software. What used to take an hour can now be done in minutes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4">
              <div className="mt-1">
                <CheckCircle className="text-neon-green" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Consistent Results</h3>
                <p className="text-gray-400">
                  Standardized processing ensures all your clips maintain the same quality and format specifications.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4">
              <div className="mt-1">
                <Music className="text-neon-green" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Audio Extraction</h3>
                <p className="text-gray-400">
                  Extract audio from video clips with a single click, perfect for creating podcasts or audio samples.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4">
              <div className="mt-1">
                <Film className="text-neon-green" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Streamlined Content Creation</h3>
                <p className="text-gray-400">
                  Perfect for content creators who need to process large numbers of clips for social media or streaming platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 md:p-12 rounded-2xl border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your editing workflow?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Download Bulk Clip Trimmer now and experience the fastest way to process your video content.
            </p>
            <div className="flex justify-center">
              <div className="inline-block">
                <a href={msStoreAppUrl} onClick={(e) => {
                  // Fallback for non-Windows devices
                  if (!navigator.userAgent.includes('Windows')) {
                    e.preventDefault();
                    window.open(msStoreBrowserUrl, '_blank');
                  }
                }}>
                  <img 
                    src="https://get.microsoft.com/images/en-us%20dark.svg" 
                    alt="Get BatchSnip - Bulk Clip Trimmer from Microsoft Store" 
                    className="w-auto h-20"
                  />
                </a>
              </div>
            </div>
            <p className="text-gray-400 mt-4">Available on Windows 10/11 devices via the Microsoft Store</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">System Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-neon-green">Minimum</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>• Windows 10 64-bit</li>
                <li>• 4GB RAM</li>
                <li>• Intel i3 / AMD Ryzen 3 or equivalent</li>
                <li>• 100MB available storage</li>
                <li>• 1280x720 display resolution</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-neon-green">Recommended</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>• Windows 10/11 64-bit</li>
                <li>• 8GB RAM</li>
                <li>• Intel i5 / AMD Ryzen 5 or better</li>
                <li>• SSD storage</li>
                <li>• 1920x1080 display resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BulkClipTrimmer;
