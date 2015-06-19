require 'sinatra'
require 'sinatra/activerecord'


helpers do
	include Rack::Utils
	alias_method :h, :escape_html
end

db = URI.parse(ENV['DATABASE_URL'] || 'postgres://postgres@localhost/spsie')

ActiveRecord::Base.establish_connection(
	:adapter	=> db.scheme == 'postgres' ? 'postgresql' : db.scheme,
	:host		=> db.host,
	:username	=> db.user,
	:password	=> db.password,
	:database	=> db.path[1..-1],
	:encoding	=> 'utf8'
	)

class Texts < ActiveRecord::Base
	validates :sit, presence: true
	validates :pro, presence: true
	validates :sol, presence: true
	validates :imp, presence: true
	validates :eva, presence: true
end

get '/' do
	@texts = Texts.order("sit ASC")
	redirect '/new' if @texts.empty?
	erb :list
end

get '/new' do
	erb :new
end

post '/new' do
	@texts = Texts.new(params[:texts])
	if @texts.save
	redirect "/texts/#{@texts.id}"
	else
	erb :new
	end
end

get '/texts/:id' do
	@texts = Texts.find_by_id(params[:id])
	erb :texts
end

get '/random' do
	@texts = Texts.all.shuffle[0]
	erb :random
end

get '/edit/:id' do
	@texts = Texts.find_by_id(params[:id])
	erb :edit
end

put '/edit/:id' do
  @texts = Texts.find(params[:id])
  @texts.update(params[:texts])
  redirect "/texts/#{@texts.id}"
end

get '/delete/:id' do
	@texts = Texts.find_by_id(params[:id])
	erb :delete
end

post '/delete/:id' do
	if params[:texts] == "ok"
		@texts = Texts.find_by_id(params[:id])
		@texts.destroy
		redirect '/'
	end
end

post '/cancel' do
	redirect '/'
end

get '/clothes' do
	erb :clothes
end