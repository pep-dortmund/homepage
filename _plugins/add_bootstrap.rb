require 'fileutils'


def find_gem_root(name)
  spec = Gem::Specification.find_by_name(name)
  spec.gem_dir
end

# Hook to add the install directory of the bootstrap gem to the scss load paths
Jekyll::Hooks.register :site, :after_init do |site|
  root = find_gem_root("bootstrap")

  sass_config = site.config["sass"]

  # add empty list if not already there
  if !sass_config.key?("load_paths")
    sass_config["load_paths"] = []
  end

  scss_dir = "#{root}/assets/stylesheets"
  sass_config["load_paths"].append(scss_dir)
end

# Hook copy the js file into the output directory
Jekyll::Hooks.register :site, :post_write do |site|

  files = []
  root = find_gem_root("bootstrap")
  files.append("#{root}/assets/javascripts/bootstrap.min.js")

  root = find_gem_root("popper_js")
  files.append("#{root}/assets/javascripts/popper.js")

  dir = "#{site.config['destination']}/assets/js"
  files.each{ |file| FileUtils.cp(file, dir) }
end
